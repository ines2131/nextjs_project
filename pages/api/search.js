import { connectDB } from "@/app/utils/database";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.query;

  try {
    const client = await connectDB;
    const db = client.db("forum");
    const facilities = db.collection("facilities");

    const filter = {};

    if (sport) {
      filter.sport = sport;
    }
    if (location) {
      filter.location = loction;
    }

    const results = await facilities.find(filter).toArray();

    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
