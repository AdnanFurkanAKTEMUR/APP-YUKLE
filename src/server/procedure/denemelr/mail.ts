// import { connectToDatabase } from "@/server/database/mongo";
// import { Collection } from "mongodb";
// import { ApiResponse, successResponse, errorResponse } from "@/server/utils/response";
// import sendMail from "@/server/utils/nodemailer";

// export default async function denemeMaili(): Promise<ApiResponse<string>> {
//   try {
//     const adnan: boolean = await sendMail();
//     if (adnan) {
//       return successResponse("", "başarılı!");
//     } else {
//       return errorResponse("Ybaşarısız!");
//     }
//   } catch (e) {
//     throw new Error(e + " asd ");
//   }
// }
