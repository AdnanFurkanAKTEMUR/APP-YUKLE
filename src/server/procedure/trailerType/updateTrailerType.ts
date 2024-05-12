import { connectToDatabase } from "@/server/database/mongo";
import { TrailerTypeType, UpdateTrailerTypeInputType, trailerTypeSchema } from "../../common/trailerTypeType/trailerTypeType";
import { Collection, ObjectId } from "mongodb";

export default async function updateTrailer(input: UpdateTrailerTypeInputType) {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const trailerCollection: Collection<TrailerTypeType> = db.collection("trailer_type");
    const updatedTrailer = await trailerCollection.updateOne(
      { _id: new ObjectId(input.id) },
      {
        $set: {
          name: input.name,
          updated_at: new Date(),
        },
      }
    );
    if (updatedTrailer.modifiedCount > 0) {
      return { success: true, reason: "güncelleme başarılı" };
    } else {
      return { success: false, reason: "Err => güncelleme başarısız" };
    }
  } catch (error) {
    throw new Error(error + " asd ");
  }
}
