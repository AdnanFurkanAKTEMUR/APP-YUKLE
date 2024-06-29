import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { DeleteOrGetLoadType, LoadType } from "@/server/common/loadTypeType/loadTypeType";

export default async function deleteLoad(input: DeleteOrGetLoadType): Promise<ApiResponse<string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const loadCollection: Collection<LoadType> = db.collection("load");
    const deleteLoad = await loadCollection.deleteOne({ _id: new ObjectId(input._id) });
    if (deleteLoad.deletedCount > 0) {
      return successResponse("", "Silme Başarılı!");
    } else {
      return errorResponse("Silme başarısız!!");
    }
  } catch (e) {
    throw new Error(e + " LoadDelete ");
  }
}
