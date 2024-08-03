import { CompanyRecord } from "@entities/CompanyRecord";
import { Context } from "@genType/genType";

const AdminUserResolvers = {
  Query: {
    getCompanyRecord: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyRecord = await CompanyRecord.findOne({ where: { id } });
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

  Mutation: {},
};

export default AdminUserResolvers;
