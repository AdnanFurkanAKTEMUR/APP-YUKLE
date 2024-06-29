import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdsType, UpdateAdsType } from "@/server/common/adsType/adsType";

export default async function updateAds(input: UpdateAdsType): Promise<ApiResponse<AdsType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adsCollection: Collection<AdsType> = db.collection("ads");
    const updateAds = await adsCollection.updateOne(
      { _id: new ObjectId(input._id) },
      {
        $set: {
          description: input.description,
          updated_user_id: new ObjectId(input.user_id),
          active: input.active,
          title: input.title,
          price: input.price,
          double_direction: input.double_direction,
          priorty: input.priorty,
          departure_date: input.departure_date,
          arrival_date: input.arrival_date,
          tonage: input.tonage,
          is_trailer_exist: input.is_trailer_exist,
          company_trailer_id: input.is_trailer_exist ? new ObjectId(input.company_trailer_id) : null,
          is_truck_exist: input.is_truck_exist,
          company_truck_id: input.is_truck_exist ? new ObjectId(input.company_truck_id) : null,
          load_type_id: new ObjectId(input.load_type_id),
          driver_point_filter: input.driver_point_filter,
          documents: input.documents,
          updated_at: new Date(),
        },
      }
    );

    if (updateAds.modifiedCount > 0) {
      const ads = await adsCollection.findOne({ _id: new ObjectId(input._id) });
      if (ads) {
        return successResponse(ads, "Başarılı");
      }
      return errorResponse("Bir hata Meydana Geldi!");
    } else {
      return errorResponse("Bir hata meydana geldi!");
    }
  } catch (e) {
    throw new Error(e + " AdsUpdate ");
  }
}
