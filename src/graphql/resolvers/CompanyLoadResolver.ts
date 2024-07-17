import { CompanyLoad } from "@entities/CompanyLoad";

const CompanyLoadResolver = {
  Query: {
    getAllCompanyLoad: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyLoad = await CompanyLoad.find();
      return companyLoad;
    },
    getCompanyLoad: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyLoad = await CompanyLoad.findOne({ where: { id: id } });
      return companyLoad;
    },
  },
};

export default CompanyLoadResolver;
