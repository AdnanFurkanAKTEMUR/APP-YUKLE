import { CompanyTrailer } from "@entities/CompanyTrailer";

const CompanyTrailerResolver = {
  Query: {
    getAllCompanyTrailer: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyTrailer = await CompanyTrailer.find();
      return companyTrailer;
    },
  },
};

export default CompanyTrailerResolver;
