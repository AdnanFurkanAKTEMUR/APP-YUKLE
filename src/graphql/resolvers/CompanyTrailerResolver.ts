import { Company } from "@entities/Company";
import { CompanyTrailer } from "@entities/CompanyTrailer";

const CompanyTrailerResolver = {
  Query: {
    getAllCompanyTrailer: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyTrailer = await CompanyTrailer.find();
      return companyTrailer;
    },
  },
  Mutation: {
    createCompanyTrailer: async (_parent: any, args: any, context: any, _info: any) => {
      console.log(context.user);
      if (context.user.role !== "admin") throw new Error("Trailer oluşturmaya yetkiniz yok!");
      const { companyId, name } = args.input;
      const companyTrailer = await CompanyTrailer.create({ name: name, companyId: companyId }).save();
      const company = await Company.findOne({ where: { id: companyId } });
      if (companyTrailer?.id) return { ...companyTrailer, company: company };
      throw new Error("Oluşturma başarısız");
    },
  },
};

export default CompanyTrailerResolver;
