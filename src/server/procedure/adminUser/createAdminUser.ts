import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdminUserType, CreateAdminUserType } from "@/server/common/adminUserType/adminUserType";
import bcrypt from "bcrypt";
import { CreateAdminUserEmail } from "@/server/utils/nodemailer";

export default async function createAdminUser(input: CreateAdminUserType): Promise<ApiResponse<AdminUserType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adminUserCollection: Collection<AdminUserType> = db.collection("admin_user");
    const encriptedPassword = await bcrypt.hash(input.password, 10);
    const createAdminUser = await adminUserCollection.insertOne({
      name: input.name,
      surname: input.surname,
      email: input.email,
      password: encriptedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    if (createAdminUser.insertedId) {
      const user = await adminUserCollection.findOne({ _id: new ObjectId(createAdminUser.insertedId) });
      if (user) {
        //geriye true veya false dönüyor. dönen değere göre mail atılıp atılmadığına dair log kaydı vs oalcak
        await CreateAdminUserEmail({
          to: input.email,
          subject: "Tirmob Admin Kullanıcısı Kayıt İşlemi",
          text: `Merhaba ${input.name}; Tirmob dünyasına hoşgeldin!`,
        });
        return successResponse(user, "Kullanıcı başarılı bi şekilde oluşturuldu!");
      }
      return errorResponse("başarısız!");
    } else {
      return errorResponse("başarısız!");
    }
  } catch (e) {
    throw new Error(e + " c a u ");
  }
}
