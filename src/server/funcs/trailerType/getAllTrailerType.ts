import { TrailerTypeType } from "@/server/common/trailerTypeType/trailerTypeType";
import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";

export default async function getAllTrailerType() {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const trailerCollection: Collection<TrailerTypeType> = db.collection("trailer_type");
    const allTrailer = await trailerCollection.find({}).toArray();

    if (allTrailer.length > 0) {
      return { success: true, reason: "Başarılı", result: allTrailer };
    } else {
      return { success: false, reason: "Err başarısız" };
    }
  } catch (e) {
    throw new Error(e + " asd ");
  }
}
