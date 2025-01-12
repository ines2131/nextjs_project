import { createSlots } from "../../app/utils/createSlots";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await createSlots();
    res.status(200).json({ message: "Slots updated successfully" });
  } catch (error) {
    console.error("Error updating slots:", error);
    res.status(500).json({ error: "Failed to update slots" });
  }
}
