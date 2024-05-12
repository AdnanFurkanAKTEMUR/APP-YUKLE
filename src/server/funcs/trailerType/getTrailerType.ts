import { DeleteTrailerTypeInputType, TrailerTypeType } from "@/server/common/trailerTypeType/trailerTypeType";
import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";

export default async function getTrailerType(input: DeleteTrailerTypeInputType) {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const trailerCollection: Collection<TrailerTypeType> = db.collection("trailer_type");
    const trailer = await trailerCollection.findOne({ _id: new ObjectId(input.id) });
    if (trailer?._id) {
      return { success: true, reason: "başarılı", result: trailer };
    } else {
      return { success: false, reason: "Err başarısız" };
    }
  } catch (e) {
    throw new Error(e + " asd ");
  }
}
