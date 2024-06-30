import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyType, DeleteOrGetCompany } from "@/server/common/companyType/companyType";

export default async function deleteCompany(input: DeleteOrGetCompany): Promise<ApiResponse<string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyCollection: Collection<CompanyType> = db.collection("company");
    const deletedData = await companyCollection.deleteOne({ _id: new ObjectId(input._id) });

    if (deletedData.deletedCount > 0) {
      return successResponse("", "başarılı!");
    } else {
      return errorResponse("Ybaşarısız!");
    }
  } catch (e) {
    throw new Error(e + " asd ");
  }
}
