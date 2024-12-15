import { City } from "@entities/City";
import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { Country } from "@entities/Country";
import { District } from "@entities/District";
import { Context } from "@genType/genType";
import generateRandomPassword from "@helpers/generateRandomPass";
import { hash } from "argon2";

const CompanyResolver = {
  Query: {
    getCompanyById: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id } = args.input;
      const { user } = context;
      if (!user || user.id == undefined) throw new Error("Hata: Yetkisiz işlem");
      const company = await Company.findOne({
        where: {
          id,
        },
      });
      if (company) return company;
      throw new Error("Kayıt bulunamadı!");
    },
    getAllCompanies: async (_parent: any, _args: any, context: Context, _info: any) => {
      const user = context?.user;
      if (!user || user.type != 0) throw new Error("Yetkisiz işlem!");
      try {
        const company = await Company.find();
        if (company.length > 0) {
          return company;
        } else {
          throw new Error("Kayıt bulunamadı!");
        }
      } catch (e) {
        throw new Error(e + "");
      }
    },
  },

  Mutation: {
    createCompany: async (_parent: any, args: any, _context: Context, _info: any) => {
      const {
        companyName,
        officialsName,
        companyPhoneNumber,
        companyMail,
        membershipNote,
        taxNumber,
        companySector,
        dailyTrip,
        truckType,
        countryId,
        cityId,
        districtId,
        addressDescription,
        messageConfirm,
        kvkkConfirm,
        otpVerification,
        mailVerification,
      } = args.input;
      try {
        const createdCompany = Company.create({
          companyName: companyName,
          officialsName: officialsName,
          companyPhoneNumber: companyPhoneNumber,
          companyMail: companyMail,
          membershipNote: membershipNote,
          taxNumber: taxNumber,
          companySector: companySector,
          dailyTrip: dailyTrip,
          truckType: truckType,
          messageConfirm: messageConfirm,
          kvkkConfirm: kvkkConfirm,
          otpVerification: otpVerification,
          mailVerification: mailVerification,
          addressDescription: addressDescription,
        });
        const country = await Country.findOne({ where: { id: countryId } });
        if (!country) throw new Error("Hata:Ülke bulunamadı!");
        createdCompany.country = country;
        const city = await City.findOne({ where: { id: cityId } });
        if (!city) throw new Error("Hata:Şehir bulanamadı!");
        createdCompany.city = city;
        const district = await District.findOne({ where: { id: districtId } });
        if (!district) throw new Error("Hata:Semt/Mahalle bulunamadı!");
        createdCompany.district = district;
        await createdCompany.save();
        const pass = generateRandomPassword();
        console.log(pass);
        const hashedPass = await hash("123");
        const createdCompanyRootUser = CompanyUser.create({
          userFirstName: companyName,
          userLastName: companyName,
          userEmail: companyMail,
          userRole: "superadmin",
          userPassword: hashedPass,
          userPhone: companyPhoneNumber,
          company: createdCompany,
        });
        await createdCompanyRootUser.save();
        return { success: true, msg: "Kayıt Başarılı!" };
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
  },
};

export default CompanyResolver;
