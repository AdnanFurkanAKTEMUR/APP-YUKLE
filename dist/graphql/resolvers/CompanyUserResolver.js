"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyUser_1 = require("../../entities/CompanyUser");
const generateToken_1 = __importDefault(require("../../helpers/generateToken"));
const argon2_1 = __importDefault(require("argon2"));
const CompanyUserResolver = {
    Query: {
        getAllCompanyUser: async (_parent, _args, _context, _info) => {
            const companyUser = await CompanyUser_1.CompanyUser.find();
            return companyUser;
        },
        getCompanyUser: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: id } });
            return companyUser;
        },
    },
    Mutation: {
        createCompanyUser: async (_parent, args, _context, _info) => {
            const { name, surname, email, role, companyId, password } = args.input;
            const hashedPassword = await argon2_1.default.hash(password);
            const verificationToken = (0, generateToken_1.default)(32);
            const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
            const companyUser = await CompanyUser_1.CompanyUser.create({ name, surname, email, role, companyId: companyId, password: hashedPassword, verificationToken, verificationTokenExpires, verified: false }).save();
            if (companyUser === null || companyUser === void 0 ? void 0 : companyUser.id) {
                const company = await Company_1.Company.findOne({ where: { id: companyUser.companyId } });
                return Object.assign(Object.assign({}, companyUser), { company });
            }
            else {
                throw new Error("Kullanıcı bulunamadı!");
            }
        },
        deleteCompanyUser: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const deletedUser = await CompanyUser_1.CompanyUser.delete({ id });
            if (deletedUser.affected === 1) {
                return { success: true, msg: "silme başarılı" };
            }
            else {
                return { success: false, msg: "silme başarısız" };
            }
        },
        updateCompanyUser: async (_parent, args, _context, _info) => {
            const { id, name, surname, role } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id } });
            if (!companyUser)
                throw new Error("Kullanıcı bulunamadı!");
            if (name !== undefined)
                companyUser.name = name;
            if (surname !== undefined)
                companyUser.surname = surname;
            if (role !== undefined)
                companyUser.role = role;
            await companyUser.save();
            return companyUser;
        },
        resetCompanyUserPassword: async (_parent, args, _context, _info) => {
            const { email, password, token } = args.input;
            if (email) {
                const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { email: email } });
                if (!companyUser)
                    throw new Error("Kullanıcı bulunamadı!");
                const genertedToken = (0, generateToken_1.default)(32);
                const tokenExpires = new Date(Date.now() + 30 * 60 * 1000);
                companyUser.resetPasswordToken = genertedToken;
                companyUser.resetPasswordTokenExpires = tokenExpires;
                const saveResult = await companyUser.save();
                if (saveResult === null || saveResult === void 0 ? void 0 : saveResult.id) {
                    return { success: true, msg: "Emailinize bir doğrulama maili gönderildi!" };
                }
                else {
                    throw new Error("başarısız!");
                }
            }
            else if (token && password) {
                const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { resetPasswordToken: token } });
                if (!companyUser)
                    throw new Error("Geçersiz Token");
                if (companyUser.resetPasswordTokenExpires && companyUser.resetPasswordTokenExpires < new Date())
                    return { success: false, reason: "Token süresi doldu. lütfen yeniden isteyiniz!" };
                const hashedPassword = await argon2_1.default.hash(password);
                companyUser.password = hashedPassword;
                companyUser.resetPasswordToken = null;
                companyUser.resetPasswordTokenExpires = null;
                const saveResult = await companyUser.save();
                if (saveResult === null || saveResult === void 0 ? void 0 : saveResult.id) {
                    return { success: true, msg: " Şifre değiştirme başarılı!" };
                }
                else {
                    throw new Error("Şifre değiştirme başarısız");
                }
            }
            else {
                throw new Error("bir hata meydana geldi");
            }
        },
        changeCompanyUserPassword: async (_parent, args, _context, _info) => {
            const { id, password, newPassword } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id } });
            if (!companyUser)
                throw new Error("Kullanıcı bulunamadı!");
            if (password === newPassword)
                return { success: false, msg: "Eski şifre ile yeni şifre aynı olamaz!" };
            const isValid = await argon2_1.default.verify(companyUser.password, password);
            if (!isValid)
                throw new Error("Şifrenizi yanlış girdiniz");
            const hashedPassword = await argon2_1.default.hash(newPassword);
            companyUser.password = hashedPassword;
            const result = await companyUser.save();
            if (result === null || result === void 0 ? void 0 : result.id) {
                return { success: true, msg: " Şifre değiştirme başarılı!" };
            }
            else {
                throw new Error("şifre değişimi başarısız. db hatası");
            }
        },
        sendVerificationEmailToCompanyUser: async (_parent, args, _context, _info) => {
            const { id, email } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: id, email: email } });
            if (!companyUser)
                throw new Error("Kullanıcı bulunamadı!");
            const verificationToken = (0, generateToken_1.default)(32);
            companyUser.verificationToken = verificationToken;
            companyUser.verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
            const res = await companyUser.save();
            if (res === null || res === void 0 ? void 0 : res.id) {
                return { success: true, msg: "Doğrulama emaili gönderildi. Lütfen mailinizi kontrol edin!" };
            }
            else {
                throw new Error("Hata");
            }
        },
        verifyCompanyUser: async (_parent, args, _context, _info) => {
            const { id, email } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: id, email: email } });
            if (!companyUser)
                throw new Error("Kullanıcı bulunamadı!");
            if (companyUser.verified)
                throw new Error("Kullanıcı zaten doğrulanmış!");
            if (companyUser.verificationTokenExpires && companyUser.verificationTokenExpires < new Date())
                return { success: false, reason: "Tokenın süresi dolmuş!" };
            companyUser.verified = true;
            companyUser.verificationToken = null;
            companyUser.verificationTokenExpires = null;
            const res = await companyUser.save();
            if (res === null || res === void 0 ? void 0 : res.id) {
                return { success: true, msg: "Doğrulama başarılı!" };
            }
            else {
                throw new Error("doğrulama başarısız");
            }
        },
    },
};
exports.default = CompanyUserResolver;
//# sourceMappingURL=CompanyUserResolver.js.map