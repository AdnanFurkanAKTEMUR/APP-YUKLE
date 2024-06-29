import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { LoadType, UpdateLoadType } from "@/server/common/loadTypeType/loadTypeType";

export default async function updateLoad(input: UpdateLoadType): Promise<ApiResponse<LoadType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const loadCollection: Collection<LoadType> = db.collection("load");
    const updateLoad = await loadCollection.updateOne(
      { _id: new ObjectId(input._id) },
      {
        $set: {
          name: input.name,
          weight: input.weight,
          trailerTypeId: new ObjectId(input.trailerTypeId),
        },
      }
    );
    if (updateLoad.modifiedCount > 0) {
      const updatedValue = await loadCollection.findOne({ _id: new ObjectId(input._id) });
      if (updatedValue) {
        return successResponse(updatedValue, "Güncelleme başarılı!");
      } else {
        return errorResponse("Bir hata meydana geldi!");
      }
    } else {
      return errorResponse("Güncelleme başarısız!");
    }
  } catch (e) {
    throw new Error(e + " LoadUpdate ");
  }
}
