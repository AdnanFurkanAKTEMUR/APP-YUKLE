import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyType, DeleteOrGetCompany } from "@/server/common/companyType/companyType";

export default async function getCompany(input: DeleteOrGetCompany): Promise<ApiResponse<CompanyType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyCollection: Collection<CompanyType> = db.collection("company");
    const company = await companyCollection.findOne({ _id: new ObjectId(input._id) });

    if (company) {
      return successResponse(company, "başarılı!");
    } else {
      return errorResponse("Bulunamadı!");
    }
  } catch (e) {
    throw new Error(e + " g c  ");
  }
}
