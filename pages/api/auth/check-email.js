import { connectDB } from "@/app/utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      const db = (await connectDB).db("forum");
      const existingUser = await db.collection("user_cred").findOne({ email });

      return res.status(200).json({ exists: !!existingUser });
    } catch (error) {
      console.error("Error checking email:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
}
