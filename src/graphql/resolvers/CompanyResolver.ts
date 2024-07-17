import { Company } from "@entities/Company";

const CompanyResolver = {
  Query: {
    getAllCompany: async (_parent: any, _args: any, _context: any, _info: any) => {
      const company = await Company.find();
      return company;
    },
    getCompany: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const company = await Company.findOne({ where: { id: id } });
      return company;
    },
  },

  Mutation: {
    createCompany: async (_parent: any, args: any, _context: any, _info: any): Promise<Company> => {
      const { companyName, address, phoneNumber, vkn, point } = args.input;
      const company = await Company.create({ companyName, address, phoneNumber, vkn, point }).save();
      return company
    },
  },
};

export default CompanyResolver;
