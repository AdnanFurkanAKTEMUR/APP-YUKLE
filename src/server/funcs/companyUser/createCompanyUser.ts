import { CompanyUserType } from "@/server/common/userTypes/companyUserTypes";
import { connectToDatabase } from "@/server/database/mongo";
import { Collection } from "mongodb";
import { CreateCompanyUserInputType } from "../../common/userTypes/companyUserTypes";

export default async function createCompanyUser(input: CreateCompanyUserInputType) {
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
    if(createdUser.insertedId){
      return { success:true, reason:"Kullanıcı başarılı bi şekilde oluşturuldu!"}
    }else {
      return { success: false, reason: "ERR => Kullanıcı oluşturalamadı!"}
    }
  } catch (e) {
    throw new Error(e + "create c user");
  }
}
