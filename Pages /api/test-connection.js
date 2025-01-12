import { connectToDatabase } from '../../lib/db';  

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();  

    const collections = await db.listCollections().toArray();

    res.status(200).json({ message: 'MongoDB connection successful', collections });
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
}
