import { CompanyProfile } from "@entities/CompanyProfile";
import { CompanyRecord } from "@entities/CompanyRecord";
import { Context } from "@genType/genType";

const CompanyRecordResolvers = {
  Query: {
    getCompanyRecord: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyRecord = await CompanyRecord.findOne({
        where: {
          id,
        },
      });
      if (companyRecord) return companyRecord;
      throw new Error("Kayıt bulunamadı!");
    },
    getAllCompanyRecord: async (_parent: any, _args: any, context: Context, _info: any) => {
      const user = context.user;
      if (!user || user.type != 0) throw new Error("Yetkisiz işlem!");
      try {
        const companyRecors = await CompanyRecord.find();
        if (companyRecors.length > 0) {
          return companyRecors;
        } else {
          throw new Error("Kayıt bulunamadı!");
        }
      } catch (e) {
        throw new Error(e + "");
      }
    },
  },

  Mutation: {
    createCompanyRecord: async (_parent: any, args: any, _context: Context, _info: any) => {
      console.log("first");
      try {
        // const {
        //   companyName,
        //   officialsName,
        //   companyPhoneNumber,
        //   companyMail,
        //   membershipNote,
        //   taxNumber,
        //   companySector,
        //   dailyTrip,
        //   truckType,
        //   countryId,
        //   cityId,
        //   districtId,
        //   addressDescription,
        //   messageConfirm,
        //   kvkkConfirm,
        //   otpVerification,
        //   mailVerification,
        // } = args.input;
        const createdCompanyProfile = await CompanyProfile.create({
          companyCode: "code01",
          companyPhoneNumber: args.input.companyPhoneNumber,
          taxNumber: args.input.taxNumber,
          taxAdministration: args.input.taxNumber,
        }).save();
        await CompanyRecord.create({
          ...args.input,
          companyProfileId: createdCompanyProfile.id,
        }).save();

        return { success: true, msg: "Kayıt Başarılı!" };
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
  },
};

export default CompanyRecordResolvers;
