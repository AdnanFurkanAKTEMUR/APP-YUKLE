import { MongoClient } from "mongodb";

let client: MongoClient;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL!);
    await client.connect();
  }
  return client;
}
