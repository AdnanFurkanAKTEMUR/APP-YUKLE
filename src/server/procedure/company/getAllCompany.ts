import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyType } from "@/server/common/companyType/companyType";

export default async function getAllCompany(): Promise<ApiResponse<CompanyType[] | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyCollection: Collection<CompanyType> = db.collection("company");
    const all = await companyCollection.find({}).toArray();
    if (all) {
      return successResponse(all, "başarılı!");
    } else {
      return errorResponse("Ybaşarısız!");
    }
  } catch (e) {
    throw new Error(e + " all co ");
  }
}
