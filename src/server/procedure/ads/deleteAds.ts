import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdsType, DeleteOrGetAdsType } from "@/server/common/adsType/adsType";

export default async function deleteAds(input: DeleteOrGetAdsType): Promise<ApiResponse<string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adsCollection: Collection<AdsType> = db.collection("ads");
    const deleteAds = await adsCollection.deleteOne({ _id: new ObjectId(input._id) });
    if (deleteAds.deletedCount > 0) {
      return successResponse("", "Silme Başarılı!");
    } else {
      return errorResponse("Silme Başarısız!");
    }
  } catch (e) {
    throw new Error(e + " AdsDelete ");
  }
}
