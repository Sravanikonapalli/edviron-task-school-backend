import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { status, order_info } = req.body;

  if (!status || !order_info) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    const { db } = await connectToDatabase();
    const { order_id, transaction_amount, gateway, bank_reference } = order_info;

    const [collect_id, transaction_id] = order_id.split("/");

    const result = await db.collection("request_status").updateOne(
      { collect_id, _id: transaction_id },
      {
        $set: {
          status,
          transaction_amount,
          gateway,
          bank_refrence: bank_reference,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json({ message: "Status updated successfully" });
  } catch (err) {
    console.error("Error updating status:", err);
    res.status(500).json({ error: "Failed to update status" });
  }
}
