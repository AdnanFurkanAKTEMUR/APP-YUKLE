import { Ad } from "@entities/Ad";
import { Company } from "@entities/Company";
import { CompanyTrailer } from "@entities/CompanyTrailer";
import type { Context } from "@genType/genType";

const CompanyTrailerResolver = {
  Query: {
    getAllCompanyTrailer: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyTrailer = await CompanyTrailer.find();
      return companyTrailer;
    },
    getCompanyTrailer: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      try {
        const companyTrailer = await CompanyTrailer.findOne({ where: { id } });
        if (!companyTrailer) throw new Error("Kayıt bulunamadı!");
        const company = await Company.findOne({ where: { id: companyTrailer.companyId } });
        let ad: any;
        if (companyTrailer.adId) ad = await Ad.findOne({ where: { id: companyTrailer.adId } });
        return { ...companyTrailer, company: company, ad: ad };
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createCompanyTrailer: async (_parent: any, args: any, context: Context, _info: any) => {
      const { user } = context;
      console.log(user);
      if (user?.role !== "admin") throw new Error("Trailer oluşturmaya yetkiniz yok!");
      const { companyId, name } = args.input;
      const companyTrailer = await CompanyTrailer.create({ name: name, companyId: companyId }).save();
      const company = await Company.findOne({ where: { id: companyId } });
      if (companyTrailer?.id) return { ...companyTrailer, company: company };
      throw new Error("Oluşturma başarısız");
    },
    updateCompanyTrailer: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id, name, adId } = args.input;
      const { user } = context;
      console.log(user);
      try {
        const cT = await CompanyTrailer.findOne({ where: { id } });
        if (!cT) throw new Error("Kayıt bulunamadı!");
        const ad = await Ad.findOne({ where: { id: adId } });
        if (name) cT.name = name;
        if (adId && ad) cT.adId = adId;
        const sr = await cT.save();
        if (sr?.id) return sr;
        throw new Error("Bir hata meydana geldi kayıt edilemedi");
      } catch (e) {
        throw new Error(e);
      }
    },
    deleteCompanyTrailer: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id } = args.input;
      const { user } = context;
      console.log(user, "user");
      try {
        const dr = await CompanyTrailer.delete({ id });
        if (dr.affected === 1) {
          return { success: true, msg: "Silme başarılı!" };
        }
        throw new Error("Silme başarısız!");
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default CompanyTrailerResolver;
