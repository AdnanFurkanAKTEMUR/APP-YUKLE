import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { CompanyBankAccount } from "../../entities/CompanyBankAccount";
import { CompanyLoad } from "@entities/CompanyLoad";
import { CompanyTrailer } from "@entities/CompanyTrailer";
import { CompanyTruck } from "@entities/CompanyTrucks";

const CompanyResolver = {
  Query: {
    getAllCompany: async (_parent: any, _args: any, context: any, _info: any) => {
      if (!context?.user || context?.user?.type !== 0) throw new Error("yetkiniz yok!");
      const company = await Company.find();
      return company;
    },
    getCompany: async (_parent: any, args: any, context: any, _info: any) => {
      if (!context?.user) throw new Error("yetkiniz yok!");
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
    createCompany: async (_parent: any, args: any, context: any, _info: any): Promise<Company> => {
      if (!context?.user || context?.user?.type !== 0) throw new Error("yetkiniz yok!");
      const { companyName, address, phoneNumber, vkn, point } = args.input;
      const company = await Company.create({ companyName, address, phoneNumber, vkn, point }).save();
      return company;
    },
    updateCompany: async (_parent: any, args: any, context: any, _info: any): Promise<Company> => {
      if (!context?.user || context?.user?.type !== 1 || context.user.role !== "admin") throw new Error("yetkiniz yok!");
      const { id, companyName, address, phoneNumber, vkn, point } = args.input;
      const company = await Company.findOne({ where: { id } });
      if (!company) throw new Error("Kayıt bulunamadı!");
      if (companyName) company.companyName = companyName;
      if (address) company.address = address;
      if (phoneNumber) company.phoneNumber = phoneNumber;
      if (vkn) company.vkn = vkn;
      if (point) company.point = point;
      const sR = await company.save();
      if (sR?.id) return company;
      throw new Error("Güncelleme başarısız");
    },
    deleteCompany: async (_parent: any, args: any, context: any, _info: any) => {
      if (!context?.user || context?.user?.type !== 0) throw new Error("yetkiniz yok!");
      const { id } = args.input;
      const company = await Company.delete({ id });
      if (company.affected === 1) return { success: true, msg: "Silme başarılı" };
      throw new Error("Silme başarısız");
    },
  },
};

export default CompanyResolver;
