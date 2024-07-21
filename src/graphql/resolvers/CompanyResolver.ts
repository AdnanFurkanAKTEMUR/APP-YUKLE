import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { CompanyBankAccount } from "../../entities/CompanyBankAccount";
import { CompanyLoad } from "@entities/CompanyLoad";
import { CompanyTrailer } from "@entities/CompanyTrailer";
import { CompanyTruck } from "@entities/CompanyTrucks";

const CompanyResolver = {
  Query: {
    getAllCompany: async (_parent: any, _args: any, _context: any, _info: any) => {
      const company = await Company.find();
      return company;
    },
    getCompany: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const company = await Company.findOne({ where: { id: id } });
      const companyUsers = await CompanyUser.find({ where: { companyId: id } });
      const companyBankAccounts = await CompanyBankAccount.find({ where: { companyId: id } });
      const companyLoads = await CompanyLoad.find({ where: { companyId: id } });
      const companyTrailers = await CompanyTrailer.find({ where: { companyId: id } });
      const companyTrucks = await CompanyTruck.find({ where: { companyId: id } });
      return { ...company, companyUsers: companyUsers, companyBankAccounts: companyBankAccounts, companyLoads: companyLoads, companyTrailers: companyTrailers, companyTrucks: companyTrucks };
    },
  },

  Mutation: {
    createCompany: async (_parent: any, args: any, _context: any, _info: any): Promise<Company> => {
      const { companyName, address, phoneNumber, vkn, point } = args.input;
      const company = await Company.create({ companyName, address, phoneNumber, vkn, point }).save();
      return company;
    },
  },
};

export default CompanyResolver;
