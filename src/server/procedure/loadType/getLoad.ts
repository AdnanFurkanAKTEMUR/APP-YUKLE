import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { DeleteOrGetLoadType, LoadType } from "@/server/common/loadTypeType/loadTypeType";

export default async function getLoad(input: DeleteOrGetLoadType): Promise<ApiResponse<LoadType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const loadCollection: Collection<LoadType> = db.collection("load");
    const load = await loadCollection.findOne({ _id: new ObjectId(input._id) });
    if (load) {
      return successResponse(load, "başarılı!");
    } else {
      return errorResponse("başarısız!");
    }
  } catch (e) {
    throw new Error(e + " LoadGet ");
  }
}
