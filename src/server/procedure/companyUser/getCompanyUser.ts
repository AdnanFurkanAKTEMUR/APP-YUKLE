
import { CompanyUserType } from "@/server/common/companyUserType/companyUserTypes";
import { connectToDatabase } from "@/server/database/mongo";
import { ApiResponse, errorResponse, successResponse } from "@/server/utils/response";
import { Collection, ObjectId } from "mongodb";

export default async function getCompanyUser(_id: string): Promise<ApiResponse<CompanyUserType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyUserCollection: Collection<CompanyUserType> = db.collection("company_user");
    const user = await companyUserCollection.findOne({ _id: new ObjectId(_id) });
    if (user) {
      return successResponse(user,"")
    } else {
      return errorResponse("Bir hata meydana geldi")
    }
  } catch (e) {
    throw new Error(e + "get c u");
  }
}
