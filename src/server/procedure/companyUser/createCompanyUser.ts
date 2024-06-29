import { CompanyUserType, CreateCompanyUserType } from "@/server/common/companyUserType/companyUserTypes";
import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { ApiResponse, successResponse } from "@/server/utils/response";
import { errorResponse } from "../../utils/response";

export default async function createCompanyUser(input: CreateCompanyUserType): Promise<ApiResponse< CompanyUserType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyUserCollection: Collection<CompanyUserType> = db.collection("company_user");
    const createdUser = await companyUserCollection.insertOne({
      name: input.name,
      surname: input.surname,
      email: input.email,
      password: input.password,
      role: input.role,
      created_at: new Date(),
      updated_at: new Date(),
    });
    if (createdUser.insertedId) {
      return successResponse("", "Kullanıcı başarılı bir şekilde oluşturuldu");
    } else {
      return errorResponse("bir hata meydana geldi");
    }
  } catch (e) {
    throw new Error(e + "create c user");
  }
}
