import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import generateToken from "@helpers/generateToken";
import argon2 from "argon2";
const CompanyUserResolver = {
  Query: {
    getAllCompanyUser: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyUser = await CompanyUser.find();
      return companyUser;
    },
    getCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id: id } });
      return companyUser;
    },
  },
  Mutation: {
    createCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      //AdminUser(biz) veya admin company User kontrolü olacak
      const { name, surname, email, role, companyId, password } = args.input;
      const hashedPassword = await argon2.hash(password);
      const verificationToken = generateToken(32);
      const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
      const companyUser = await CompanyUser.create({ name, surname, email, role, companyId: companyId, password: hashedPassword, verificationToken, verificationTokenExpires, verified: false }).save();
      if (companyUser?.id) {
        const company = await Company.findOne({ where: { id: companyUser.companyId } });
        //kayıt ve verification emaili
        return { ...companyUser, company };
      } else {
        throw new Error("Kullanıcı bulunamadı!");
      }
    },
    deleteCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      //adminuser veya admincompanyUser kontrolü gerekli
      const { id } = args.input;
      const deletedUser = await CompanyUser.delete({ id });
      if (deletedUser.affected === 1) {
        return { success: true, msg: "silme başarılı" };
      } else {
        return { success: false, msg: "silme başarısız" };
      }
    },
    updateCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      //adminuser veya admincompanyUser kontrolü gerekli
      const { id, name, surname, role } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id } });
      if (!companyUser) throw new Error("Kullanıcı bulunamadı!");
      if (name !== undefined) companyUser.name = name;
      if (surname !== undefined) companyUser.surname = surname;
      if (role !== undefined) companyUser.role = role;
      await companyUser.save();
      return companyUser;
    },
    resetCompanyUserPassword: async (_parent: any, args: any, _context: any, _info: any) => {
      //adminuser veya admincompanyUser kontrolü gerekli
      const { email, password, token } = args.input;
      if (email) {
        const companyUser = await CompanyUser.findOne({ where: { email: email } });
        if (!companyUser) throw new Error("Kullanıcı bulunamadı!");
        const genertedToken = generateToken(32);
        const tokenExpires = new Date(Date.now() + 30 * 60 * 1000);
        companyUser.resetPasswordToken = genertedToken;
        companyUser.resetPasswordTokenExpires = tokenExpires;
        const saveResult = await companyUser.save();
        if (saveResult?.id) {
          //send resetPasswordEmail
          return { success: true, msg: "Emailinize bir doğrulama maili gönderildi!" };
        } else {
          throw new Error("başarısız!");
        }
      } else if (token && password) {
        //regex işlemleri
        const companyUser = await CompanyUser.findOne({ where: { resetPasswordToken: token } });
        if (!companyUser) throw new Error("Geçersiz Token");
        if (companyUser.resetPasswordTokenExpires && companyUser.resetPasswordTokenExpires < new Date()) return { success: false, reason: "Token süresi doldu. lütfen yeniden isteyiniz!" };
        const hashedPassword = await argon2.hash(password);
        companyUser.password = hashedPassword;
        companyUser.resetPasswordToken = null;
        companyUser.resetPasswordTokenExpires = null;
        const saveResult = await companyUser.save();
        if (saveResult?.id) {
          //şifre değiştirme bildirimi maili
          return { success: true, msg: " Şifre değiştirme başarılı!" };
        } else {
          throw new Error("Şifre değiştirme başarısız");
        }
      } else {
        throw new Error("bir hata meydana geldi");
      }
    },
    changeCompanyUserPassword: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id, password, newPassword } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id } });
      if (!companyUser) throw new Error("Kullanıcı bulunamadı!");
      if (password === newPassword) return { success: false, msg: "Eski şifre ile yeni şifre aynı olamaz!" };

      const isValid = await argon2.verify(companyUser.password, password);
      if (!isValid) throw new Error("Şifrenizi yanlış girdiniz");
      const hashedPassword = await argon2.hash(newPassword);
      companyUser.password = hashedPassword;
      const result = await companyUser.save();
      if (result?.id) {
        //şifre değişimi bildirimi mesajı
        return { success: true, msg: " Şifre değiştirme başarılı!" };
      } else {
        throw new Error("şifre değişimi başarısız. db hatası");
      }
    },
    sendVerificationEmailToCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id, email } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id: id, email: email } });
      if (!companyUser) throw new Error("Kullanıcı bulunamadı!");
      const verificationToken = generateToken(32);
      companyUser.verificationToken = verificationToken;
      companyUser.verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
      const res = await companyUser.save();
      if (res?.id) {
        //sendverification mail
        return { success: true, msg: "Doğrulama emaili gönderildi. Lütfen mailinizi kontrol edin!" };
      } else {
        throw new Error("Hata");
      }
    },
    verifyCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id, email } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id: id, email: email } });
      if (!companyUser) throw new Error("Kullanıcı bulunamadı!");
      if (companyUser.verified) throw new Error("Kullanıcı zaten doğrulanmış!");
      if (companyUser.verificationTokenExpires && companyUser.verificationTokenExpires < new Date()) return { success: false, reason: "Tokenın süresi dolmuş!" };
      companyUser.verified = true;
      companyUser.verificationToken = null;
      companyUser.verificationTokenExpires = null;
      const res = await companyUser.save();
      if (res?.id) {
        return { success: true, msg: "Doğrulama başarılı!" };
      } else {
        throw new Error("doğrulama başarısız");
      }
    },
  },
};

export default CompanyUserResolver;
