import { Company } from "@entities/Company";
import { Context } from "@genType/genType";

const CompanyRecordResolvers = {
  Query: {
    getCompanyRecord: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyRecord = await Company.findOne({
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
        const companyRecors = await Company.find();
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
    // createCompanyRecord: async (_parent: any, args: any, _context: Context, _info: any) => {
    //   const {
    //     companyName,
    //     officialsName,
    //     companyPhoneNumber,
    //     companyMail,
    //     membershipNote,
    //     taxNumber,
    //     companySector,
    //     dailyTrip,
    //     truckType,
    //     countryId,
    //     cityId,
    //     districtId,
    //     addressDescription,
    //     messageConfirm,
    //     kvkkConfirm,
    //     otpVerification,
    //     mailVerification,
    //   } = args.input;
    //   try {
    //     const createdCompanyProfile = Company.create({});
    //     return { success: true, msg: "Kayıt Başarılı!" };
    //   } catch (e) {
    //     console.log(e);
    //     throw new Error(e);
    //   }
    // },
  },
};

export default CompanyRecordResolvers;
