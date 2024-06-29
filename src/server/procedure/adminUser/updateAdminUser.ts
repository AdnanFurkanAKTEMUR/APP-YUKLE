import { connectToDatabase } from "@/server/database/mongo";
import { Collection, ObjectId } from "mongodb";
import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
import { AdminUserType, UpdateAdminUserType } from "@/server/common/adminUserType/adminUserType";

export default async function updateAdminUser(input: UpdateAdminUserType): Promise<ApiResponse<AdminUserType | string>> {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const adminUesrCollection: Collection<AdminUserType> = db.collection("admin_user");
    const updateAdminUser = await adminUesrCollection.updateOne(
      { _id: new ObjectId(input._id) },
      {
        $set: {
          name: input.name,
          surname: input.surname,
          updated_at: new Date(),
        },
      }
    );
    if (updateAdminUser.modifiedCount > 0) {
      const user = await adminUesrCollection.findOne({ _id: new ObjectId(input._id) });
      if (user) return successResponse(user, "kullanıcı başarılı bir şekilde oluşturuldu!");
      return errorResponse("başarısız!!");
    } else {
      return errorResponse("Ybaşarısız!");
    }
  } catch (e) {
    throw new Error(e + " u a u ");
  }
}
