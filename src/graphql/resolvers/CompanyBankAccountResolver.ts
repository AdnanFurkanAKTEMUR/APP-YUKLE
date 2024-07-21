import { Company } from "@entities/Company";
import { CompanyBankAccount } from "@entities/CompanyBankAccount";
import { In } from "typeorm/find-options/operator/In";

const CompanyBankAccountResolver = {
  Query: {
    getAllCompanyBankAccount: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyBankAccount = await CompanyBankAccount.find();
      const companyIds = companyBankAccount.map((c: CompanyBankAccount) => {
        return c.id;
      });
      const companies = await Company.find({ where: { id: In(companyIds) } });
      const result = companyBankAccount.map((c: CompanyBankAccount) => {
        const company = companies.find((element: Company) => {
          return element.id == c.companyId;
        });
        return { ...c, company };
      });
      return result;
    },
    getCompanyBankAccount: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyBankAccount = await CompanyBankAccount.findOne({ where: { id: id } });
      const company = await Company.findOne({ where: { id: companyBankAccount?.companyId } });
      return { ...companyBankAccount, company: company };
    },
  },

  Mutation: {
    createCompanyBankAccount: async (_parent: any, args: any, context: any, _info: any) => {
      if (!context?.user || !context.user.user_id || context.user.role !== "admin") throw new Error("yetkiniz yok");
      const { companyId, iban, accountUserName, bankAccountNumber, bankName } = args.input;
      const companyBankAccount = await CompanyBankAccount.create({ bankName, companyId, iban, accountUserName, bankAccountNumber }).save();
      const company = await Company.findOne({ where: { id: companyId } });
      if (companyBankAccount?.id) return { ...companyBankAccount, company: company };
      throw new Error("Kayıt edilemedi!");
    },
    updateCompanyBankAccount: async (_parent: any, args: any, context: any, _info: any) => {
      //genel bi yetki kontrol fonksiyonu yazılmalı. yetkiler ekranı geliştirildiğinde
      if (!context?.user || !context.user.user_id || context.user.role !== "admin") throw new Error("yetkiniz yok");
      const { id, iban, accountUserName, bankAccountNumber, bankName } = args.input;
      const companyBankAccount = await CompanyBankAccount.findOne({ where: { id } });
      if (!companyBankAccount) throw new Error("Kayıt bulunamadı!");
      if (iban) companyBankAccount.iban = iban;
      if (accountUserName) companyBankAccount.accountUserName = accountUserName;
      if (bankAccountNumber) companyBankAccount.bankAccountNumber = bankAccountNumber;
      if (bankName) companyBankAccount.bankName = bankName;
      const sR = await companyBankAccount.save();
      const company = await Company.findOne({ where: { id: sR.companyId } });
      if (sR?.id) return { ...companyBankAccount, company: company };
      throw new Error("Güncellenemedi!");
    },
    deleteCompanyBankAccount: async (_parent: any, args: any, context: any, _info: any) => {
      if (!context?.user || !context.user.user_id || context.user.role !== "admin") throw new Error("yetkiniz yok");
      const { id } = args.input;
      const companyBankAccount = await CompanyBankAccount.delete({ id: id });
      console.log(companyBankAccount.affected);
      console.log(companyBankAccount.raw);
      if (companyBankAccount?.affected === 1) return { success: true, msg: "Silme başarılı!" };
      throw new Error("Slinemedi!");
    },
  },
};

export default CompanyBankAccountResolver;
