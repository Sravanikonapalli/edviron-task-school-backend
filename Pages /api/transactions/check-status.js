import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  const { custom_order_id } = req.query;

  if (!custom_order_id) {
    return res.status(400).json({ error: "Custom Order ID is required" });
  }

  try {
    const { db } = await connectToDatabase();
    const transaction = await db
      .collection("request")
      .aggregate([
        { $match: { custom_order_id } },
        {
          $lookup: {
            from: "request_status",
            localField: "_id",
            foreignField: "collect_id",
            as: "status_details",
          },
        },
        {
          $unwind: "$status_details",
        },
        {
          $project: {
            custom_order_id: 1,
            status: "$status_details.status",
          },
        },
      ])
      .toArray();

    if (transaction.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json({ status: transaction[0].status });
  } catch (err) {
    console.error("Error checking status:", err);
    res.status(500).json({ error: "Failed to check status" });
  }
}
