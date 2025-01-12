import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'local'; 
let client;
let db;

export const connectToDatabase = async () => {
  if (client && db) return { client, db };

  try {
    client = new MongoClient(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
    await client.connect();
    db = client.db(dbName); 
    console.log('Successfully connected to MongoDB!');
    return { client, db };
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};
