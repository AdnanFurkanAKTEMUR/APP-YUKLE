import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { DeleteTrailerTypeInputType, TrailerTypeType } from "../../common/trailerTypeType/trailerTypeType";

export default async function deleteTrailerType(input: DeleteTrailerTypeInputType) {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const trailerTypeCollec: Collection<TrailerTypeType> = db.collection("trailer_type");
    const deletedTrailer = await trailerTypeCollec.deleteOne({ _id: new ObjectId(input.id) });
    if (deletedTrailer.deletedCount > 0) {
      return { success: true, reason: "Silme Başarılı" };
    } else {
      return { success: false, reason: "Err silme başarısız" };
    }
  } catch (e) {
    throw new Error(e + " asd ");
  }
}
