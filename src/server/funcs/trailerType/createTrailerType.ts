import { Collection } from "mongodb";
import { CreateTrailerTypeInputType, TrailerTypeType } from "../../common/trailerTypeType/trailerTypeType";
import { connectToDatabase } from "@/server/database/mongo";

export default async function createTrailerType(input: CreateTrailerTypeInputType) {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const trailerTypeCollection: Collection<TrailerTypeType> = db.collection("trailer_type");
    const createdTrailerType = await trailerTypeCollection.insertOne({
      name: input.name,
      created_at: new Date(),
      updated_at: new Date(),
    });
    if (createdTrailerType.insertedId) {
      return { success: true, reason: "Kayıt Başarılı!" };
    } else {
      return { success: false, reason: "Err: kayıt başarısız!" };
    }
  } catch (e) {
    throw new Error(e + "c t t");
  }
}
