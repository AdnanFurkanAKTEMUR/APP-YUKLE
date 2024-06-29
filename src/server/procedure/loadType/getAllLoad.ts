import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { LoadType } from "@/server/common/loadTypeType/loadTypeType";

export default async function getAllLoad(): Promise<ApiResponse<LoadType[] | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const loadCollection: Collection<LoadType> = db.collection("load");
    const loads = await loadCollection.find({}).toArray();
    if (loads) {
      return successResponse(loads, "başarılı!");
    } else {
      return errorResponse("başarısız!");
    }
  } catch (e) {
    throw new Error(e + " LoadAllGet ");
  }
}
