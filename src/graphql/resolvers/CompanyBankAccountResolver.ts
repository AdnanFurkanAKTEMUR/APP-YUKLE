import { CompanyBankAccount } from "@entities/CompanyBankAccount";

const CompanyBankAccountResolver = {
  Query: {
    getAllCompanyBankAccount: async (_parent: any, _args: any, _context: any, _info: any) => {
      const company = await CompanyBankAccount.find();
      return company;
    },
    getCompanyBankAccount: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const company = await CompanyBankAccount.findOne({ where: { id: id } });
      return company;
    },
  },
};

export default CompanyBankAccountResolver;
