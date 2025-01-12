import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    const transactions = await db
      .collection("request")
      .aggregate([
        {
          $lookup: {
            from: "request_status",
            localField: "_id", 
            foreignField: "collect_id", 
            as: "status_details",
          },
        },
        {
          $unwind: { 
            path: "$status_details", 
            preserveNullAndEmptyArrays: true, 
          },
        },
        {
          $project: {
            collect_id: "$_id", 
            school_id: 1,
            gateway: 1,
            order_amount: 1,
            transaction_amount: "$status_details.transaction_amount",
            status: "$status_details.status",
            custom_order_id: 1,
          },
        },
      ])
      .toArray();

    res.status(200).json({ transactions });
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
}  
