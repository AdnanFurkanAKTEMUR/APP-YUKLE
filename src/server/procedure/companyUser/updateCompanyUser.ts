import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { CompanyUserType, UpdateCompanyUserType } from "@/server/common/companyUserType/companyUserTypes";

export default async function updateCompanyUser(input: UpdateCompanyUserType): Promise<ApiResponse<CompanyUserType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const companyUserCollection: Collection<CompanyUserType> = db.collection("company_user");
    const updateComUser = await companyUserCollection.updateOne(
      { _id: new ObjectId(input._id) },
      {
        $set: {
          name: input.name,
          surname: input.surname,
          role: input.role,
        },
      }
    );
    if (updateComUser.modifiedCount > 0) {
      const user = await companyUserCollection.findOne({ _id: new ObjectId(input._id) });
      if (user) {
        return successResponse(user, "Başarılı!");
      }
      return errorResponse("kullanıcı oluşturuldu ama getirelemedi!");
    } else {
      return errorResponse("başarısız!");
    }
  } catch (e) {
    throw new Error(e + " updateCompanyUser ");
  }
}
