import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { Context } from "@genType/genType";
import { hash } from "argon2";

const CompanyUserResolver = {
  Query: {
    getCompanyUserById: async (
      _parent: any,
      args: any,
      context: Context,
      _info: any
    ): Promise<CompanyUser | null> => {
      const { id } = args.input;
      const { user } = context;
      if (!user || user.id == undefined)
        throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
      try {
        const companyUser = await CompanyUser.findOne({
          where: { id: id, company: { id: user.company_id } },
        });
        return companyUser;
      } catch (e) {
        throw new Error(e);
      }
    },
    getAllCompanyUsers: async (
      _parent: any,
      _args: any,
      context: Context,
      _info: any
    ): Promise<CompanyUser[] | null> => {
      const { user } = context;
      console.log(user);
      try {
        const companyUsers = await CompanyUser.find();
        return companyUsers;
      } catch (e) {
        throw new Error(e);
      }
    },
    getCompanyUsersOfCompany: async (
      _parent: any,
      _args: any,
      context: Context,
      _info: any
    ): Promise<CompanyUser[] | null> => {
      const { user } = context;
      if (!user || user.id == undefined) throw new Error("Hata: Kullanıcı yetkisi geçersiz");
      try {
        const users = await CompanyUser.find({ where: { company: { id: user.company_id } } });
        return users;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createCompanyUser: async (
      _parent: any,
      args: any,
      context: Context,
      _info: any
    ): Promise<CompanyUser | null> => {
      const {
        userFirstName,
        userLastName,
        userEmail,
        userRole,
        userPassword,
        userPhone,
        userImage,
      } = args.input;
      const { user } = context;
      if (!user || user.id == undefined) throw new Error("Hata: Yetkisiz işlem");
      try {
        const hashedPassword = await hash(userPassword);
        const companyUser = CompanyUser.create({
          userFirstName: userFirstName,
          userLastName: userLastName,
          userEmail: userEmail,
          userRole: userRole,
          userPassword: hashedPassword,
          userPhone: userPhone,
          userImage: userImage,
        });
        const company = await Company.findOne({ where: { id: user.company_id } });
        if (!company) throw new Error("Hata: Firma bilgisi bulunamadı!");
        companyUser.company = company;
        await companyUser.save();
        return companyUser;
      } catch (e) {
        throw new Error(e);
      }
    },
    createCompanyUserByAdmin: async (
      _parent: any,
      args: any,
      _context: Context,
      _info: any
    ): Promise<CompanyUser | null> => {
      const {
        userFirstName,
        userLastName,
        userEmail,
        userRole,
        userPassword,
        userPhone,
        userImage,
        companyId,
      } = args.input;
      // const { user } = context;
      //if (!user || user.id == undefined) throw new Error("Hata: Yetkisiz işlem");
      try {
        const hashedPassword = await hash(userPassword);
        const companyUser = CompanyUser.create({
          userFirstName: userFirstName,
          userLastName: userLastName,
          userEmail: userEmail,
          userRole: userRole,
          userPassword: hashedPassword,
          userPhone: userPhone,
          userImage: userImage,
        });
        const company = await Company.findOne({ where: { id: companyId } });
        if (!company) throw new Error("Hata: Firma bilgisi bulunamadı!");
        companyUser.company = company;
        await companyUser.save();
        return companyUser;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default CompanyUserResolver;
