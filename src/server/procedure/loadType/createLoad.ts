import { CreateLoadType, LoadType } from "@/server/common/loadTypeType/loadTypeType";
import { connectToDatabase } from "@/server/database/mongo";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { Collection, ObjectId } from "mongodb";

export default async function createLoad(input: CreateLoadType): Promise<ApiResponse<string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const loadCollection: Collection<LoadType> = db.collection("load");
    const createLoad = await loadCollection.insertOne({ name: input.name, trailerTypeId: new ObjectId(input.trailerTypeId), weight: input.weight });

    if (createLoad.insertedId) {
      return successResponse("", "Yük başarılı bir şekilde oluşturuldu!");
    } else {
      return errorResponse("Yük oluşturması başarısız");
    }
  } catch (e) {
    throw new Error(e + " LoadCreate ");
  }
}
