import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdsType, DeleteOrGetAdsType } from "@/server/common/adsType/adsType";

export default async function getAds(input: DeleteOrGetAdsType): Promise<ApiResponse<AdsType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adsCollection: Collection<AdsType> = db.collection("ads");
    const ads = await adsCollection.findOne({ _id: new Object(input._id) });
    if (ads) {
      return successResponse(ads, "başarılı!");
    } else {
      return errorResponse("İlan bulunamadı!");
    }
  } catch (e) {
    throw new Error(e + " adsGet ");
  }
}
