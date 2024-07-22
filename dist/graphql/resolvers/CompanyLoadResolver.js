"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyLoad_1 = require("../../entities/CompanyLoad");
const CompanyLoadResolver = {
    Query: {
        getAllCompanyLoad: async (_parent, _args, _context, _info) => {
            const companyLoad = await CompanyLoad_1.CompanyLoad.find();
            return companyLoad;
        },
        getCompanyLoad: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyLoad = await CompanyLoad_1.CompanyLoad.findOne({ where: { id: id } });
            return companyLoad;
        },
    },
    Mutation: {
        createCompanyLoad: async (_parent, args, _context, _info) => {
            const { companyId, name } = args.input;
            const companyLoad = await CompanyLoad_1.CompanyLoad.create({ name, companyId }).save();
            const company = await Company_1.Company.findOne({ where: { id: companyId } });
            if (companyLoad === null || companyLoad === void 0 ? void 0 : companyLoad.id)
                return Object.assign(Object.assign({}, companyLoad), { company: company });
            throw new Error("Kayıt oluşturma başarısız");
        },
        updateCompanyLoad: async (_parent, args, _context, _info) => {
            const { id, name } = args.input;
            try {
                const companyLoad = await CompanyLoad_1.CompanyLoad.findOne({ where: { id } });
                if (!(companyLoad === null || companyLoad === void 0 ? void 0 : companyLoad.id))
                    throw new Error("Kayıt bulunamadı!");
                if (name)
                    companyLoad.name = name;
                const rS = await companyLoad.save();
                if (!(rS === null || rS === void 0 ? void 0 : rS.id))
                    throw new Error("Güncelleme başarısız");
                const company = await Company_1.Company.findOne({ where: { id: rS === null || rS === void 0 ? void 0 : rS.companyId } });
                return Object.assign(Object.assign({}, companyLoad), { company: company });
            }
            catch (e) {
                throw new Error(e);
            }
        },
        deleteCompanyLoad: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyLoad = await CompanyLoad_1.CompanyLoad.delete({ id });
            if (companyLoad.affected === 1)
                return { success: true, msg: "silme başarılı" };
            throw new Error("Silme başarısız");
        },
    },
};
exports.default = CompanyLoadResolver;
//# sourceMappingURL=CompanyLoadResolver.js.map