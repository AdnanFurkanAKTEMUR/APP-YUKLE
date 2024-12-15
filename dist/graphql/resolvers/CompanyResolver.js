"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("../../entities/City");
const Company_1 = require("../../entities/Company");
const CompanyUser_1 = require("../../entities/CompanyUser");
const Country_1 = require("../../entities/Country");
const District_1 = require("../../entities/District");
const generateRandomPass_1 = __importDefault(require("../../helpers/generateRandomPass"));
const argon2_1 = require("argon2");
const CompanyResolver = {
    Query: {
        getCompanyById: async (_parent, args, context, _info) => {
            const { id } = args.input;
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem");
            const company = await Company_1.Company.findOne({
                where: {
                    id,
                },
            });
            if (company)
                return company;
            throw new Error("Kayıt bulunamadı!");
        },
        getAllCompanies: async (_parent, _args, context, _info) => {
            const user = context === null || context === void 0 ? void 0 : context.user;
            if (!user || user.type != 0)
                throw new Error("Yetkisiz işlem!");
            try {
                const company = await Company_1.Company.find();
                if (company.length > 0) {
                    return company;
                }
                else {
                    throw new Error("Kayıt bulunamadı!");
                }
            }
            catch (e) {
                throw new Error(e + "");
            }
        },
    },
    Mutation: {
        createCompany: async (_parent, args, _context, _info) => {
            const { companyName, officialsName, companyPhoneNumber, companyMail, membershipNote, taxNumber, companySector, dailyTrip, truckType, countryId, cityId, districtId, addressDescription, messageConfirm, kvkkConfirm, otpVerification, mailVerification, } = args.input;
            try {
                const createdCompany = Company_1.Company.create({
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
                const country = await Country_1.Country.findOne({ where: { id: countryId } });
                if (!country)
                    throw new Error("Hata:Ülke bulunamadı!");
                createdCompany.country = country;
                const city = await City_1.City.findOne({ where: { id: cityId } });
                if (!city)
                    throw new Error("Hata:Şehir bulanamadı!");
                createdCompany.city = city;
                const district = await District_1.District.findOne({ where: { id: districtId } });
                if (!district)
                    throw new Error("Hata:Semt/Mahalle bulunamadı!");
                createdCompany.district = district;
                await createdCompany.save();
                const pass = (0, generateRandomPass_1.default)();
                console.log(pass);
                const hashedPass = await (0, argon2_1.hash)("123");
                const createdCompanyRootUser = CompanyUser_1.CompanyUser.create({
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
            }
            catch (e) {
                console.log(e);
                throw new Error(e);
            }
        },
    },
};
exports.default = CompanyResolver;
//# sourceMappingURL=CompanyResolver.js.map