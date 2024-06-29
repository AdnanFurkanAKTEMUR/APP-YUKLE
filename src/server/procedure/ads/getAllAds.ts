import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdsType } from "@/server/common/adsType/adsType";

export default async function getAllAds(): Promise<ApiResponse<AdsType[] | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adsCollection: Collection<AdsType> = db.collection("ads");
    const allAds = await adsCollection.find({}).toArray();
    if (allAds) {
      return successResponse(allAds, "başarılı!");
    } else {
      return errorResponse("Bir hata meydana geldi");
    }
  } catch (e) {
    throw new Error(e + " getAdsAll ");
  }
}
