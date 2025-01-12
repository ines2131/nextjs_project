import dayjs from "dayjs";
import { connectDB } from "./database";

export default async function createSlots() {
  try {
    const client = await connectDB();
    const db = client.db("forum");
    const slots = db.collection("slots_tennis");
    const facilities = db.collection("facilities_tennis");

    const startTime = 6;
    const endTime = 24;
    const daysToGenerate = 28;

    const today = dayjs().startOf("day");
    const newSlots = [];

    const facilitiesList = await facilities.find({}).toArray();

    for (let i = 0; i < daysToGenerate; i++) {
      const date = today.add(i, "day").format("DD-MM-YYYY");

      for (let hour = startTime; hour < endTime; hour++) {
        const time = `${hour.toString.padStart(2, "0")}:00`;

        facilitiesList.forEach((facility) => {
          newSlots.push({
            facilityId: facility_id,
            date,
            time,
            isBooked: false,
          });
        });
      }
    }
    for (const slot of newSlots) {
      await slots.updateOne(
        { facilityId: slot.facilityId, date: slot.date, time: slot.time },
        { $setOnInsert: slot },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error("Error creating slots:", error);
  }
}
