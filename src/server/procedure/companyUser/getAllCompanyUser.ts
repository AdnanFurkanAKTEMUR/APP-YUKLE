import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyUserType } from "@/server/common/companyUserType/companyUserTypes";

export default async function getAllCompanyUser(): Promise<ApiResponse<CompanyUserType[] | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyUserCollection: Collection<CompanyUserType> = db.collection("company_user");
    const all = await companyUserCollection.find({}).toArray();
    if (all) {
      return successResponse(all, "başarılı!");
    } else {
      return errorResponse("Ybaşarısız!");
    }
  } catch (e) {
    throw new Error(e + " asd ");
  }
}
