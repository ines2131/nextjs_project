import { connectDB } from "@/app/utils/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to the database
      const client = await connectDB;
      const db = client.db("forum");
      const facilitiesCollection = db.collection("facilities");
      const slotsTennisCollection = db.collection("slots_tennis");

      // Extract query parameters
      const { sport, location, date, time } = req.query;

      // Fetch the single document with all facilities
      const facility = await facilitiesCollection.findOne();

      if (!facility || !facility.features) {
        return res.status(404).json({ message: "No facilities found." });
      }

      // Filter features array based on sport and location
      const filteredFeatures = facility.features.filter((feature) => {
        const properties = feature.properties;
        return properties.SEARCH01_EN.toLowerCase().includes(
          location.toLowerCase()
        ); // Match location
      });

      // Check for reserved slots
      const reservedSlots = await slotsTennisCollection
        .find({ date, time })
        .toArray();

      // Filter out reserved courts
      const availableCourts = filteredFeatures.filter((feature) => {
        const featureId = feature.properties.NAME_EN; // Use NAME_EN as unique identifier for courts
        return !reservedSlots.some(
          (slot) =>
            slot.featureId === featureId &&
            slot.date === date &&
            slot.time === time
        );
      });

      // Map the results for the response
      const result = availableCourts.map((feature) => ({
        courtName: feature.properties.NAME_EN,
        address: feature.properties.ADDRESS_EN,
        latitude: feature.properties.LATITUDE,
        longitude: feature.properties.LONGITUDE,
      }));

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
