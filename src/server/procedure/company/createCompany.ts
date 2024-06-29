import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyType, CreateCompanyType } from "@/server/common/companyType/companyType";

export default async function createCompany(input: CreateCompanyType): Promise<ApiResponse<CompanyType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const compnayCollection: Collection<CompanyType> = db.collection("company");
    const createCompany = await compnayCollection.insertOne({
      name: input.phone_number,
      address: input.address,
      phone_number: input.phone_number,
      vkn: input.vkn,
    });
    if (createCompany.insertedId) {
      const com = await compnayCollection.findOne({ _id: new ObjectId(createCompany.insertedId) });
      if (com) {
        return successResponse(com, "Şirket oluşturma başarılı!");
      }
      return errorResponse("şirket oluşturuldu ama getirilirken bir hata ile karşılaşıldı!");
    } else {
      return errorResponse("oluşturalamadı!");
    }
  } catch (e) {
    throw new Error(e + " CompanyCreate ");
  }
}
