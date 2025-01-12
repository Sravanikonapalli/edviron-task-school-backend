import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    const statuses = await db.collection("request_status").find().toArray();

    res.status(200).json({ statuses });  
  } catch (err) {
    console.error("Error fetching request status data:", err);
    res.status(500).json({ error: "Failed to fetch request status data" });
  }
}
