import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    const requests = await db.collection("request").find().toArray();

    res.status(200).json({ requests });  
  } catch (err) {
    console.error("Error fetching request data:", err);
    res.status(500).json({ error: "Failed to fetch request data" });
  }
}
