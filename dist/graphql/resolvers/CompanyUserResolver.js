"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyUser_1 = require("../../entities/CompanyUser");
const argon2_1 = require("argon2");
const CompanyUserResolver = {
    Query: {
        getCompanyUserById: async (_parent, args, context, _info) => {
            const { id } = args.input;
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
            try {
                const companyUser = await CompanyUser_1.CompanyUser.findOne({
                    where: { id: id, company: { id: user.company_id } },
                });
                return companyUser;
            }
            catch (e) {
                throw new Error(e);
            }
        },
        getAllCompanyUsers: async (_parent, _args, context, _info) => {
            const { user } = context;
            console.log(user);
            try {
                const companyUsers = await CompanyUser_1.CompanyUser.find();
                return companyUsers;
            }
            catch (e) {
                throw new Error(e);
            }
        },
        getCompanyUsersOfCompany: async (_parent, _args, context, _info) => {
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Kullanıcı yetkisi geçersiz");
            try {
                const users = await CompanyUser_1.CompanyUser.find({ where: { company: { id: user.company_id } } });
                return users;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createCompanyUser: async (_parent, args, context, _info) => {
            const { userFirstName, userLastName, userEmail, userRole, userPassword, userPhone, userImage, } = args.input;
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem");
            try {
                const hashedPassword = await (0, argon2_1.hash)(userPassword);
                const companyUser = CompanyUser_1.CompanyUser.create({
                    userFirstName: userFirstName,
                    userLastName: userLastName,
                    userEmail: userEmail,
                    userRole: userRole,
                    userPassword: hashedPassword,
                    userPhone: userPhone,
                    userImage: userImage,
                });
                const company = await Company_1.Company.findOne({ where: { id: user.company_id } });
                if (!company)
                    throw new Error("Hata: Firma bilgisi bulunamadı!");
                companyUser.company = company;
                await companyUser.save();
                return companyUser;
            }
            catch (e) {
                throw new Error(e);
            }
        },
        createCompanyUserByAdmin: async (_parent, args, _context, _info) => {
            const { userFirstName, userLastName, userEmail, userRole, userPassword, userPhone, userImage, companyId, } = args.input;
            try {
                const hashedPassword = await (0, argon2_1.hash)(userPassword);
                const companyUser = CompanyUser_1.CompanyUser.create({
                    userFirstName: userFirstName,
                    userLastName: userLastName,
                    userEmail: userEmail,
                    userRole: userRole,
                    userPassword: hashedPassword,
                    userPhone: userPhone,
                    userImage: userImage,
                });
                const company = await Company_1.Company.findOne({ where: { id: companyId } });
                if (!company)
                    throw new Error("Hata: Firma bilgisi bulunamadı!");
                companyUser.company = company;
                await companyUser.save();
                return companyUser;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = CompanyUserResolver;
//# sourceMappingURL=CompanyUserResolver.js.map