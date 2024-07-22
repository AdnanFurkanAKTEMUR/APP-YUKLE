import { Company } from "@entities/Company";
import { CompanyLoad } from "@entities/CompanyLoad";

const CompanyLoadResolver = {
  Query: {
    getAllCompanyLoad: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyLoad = await CompanyLoad.find();
      return companyLoad;
    },
    getCompanyLoad: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyLoad = await CompanyLoad.findOne({ where: { id: id } });
      return companyLoad;
    },
  },
  Mutation: {
    createCompanyLoad: async (_parent: any, args: any, _context: any, _info: any) => {
      const { companyId, name } = args.input;
      const companyLoad = await CompanyLoad.create({ name, companyId }).save();
      const company = await Company.findOne({ where: { id: companyId } });
      //ad varsa adde eklenebilir
      if (companyLoad?.id) return { ...companyLoad, company: company };
      throw new Error("Kayıt oluşturma başarısız");
    },
    updateCompanyLoad: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id, name } = args.input;
      try {
        const companyLoad = await CompanyLoad.findOne({ where: { id } });
        if (!companyLoad?.id) throw new Error("Kayıt bulunamadı!");
        if (name) companyLoad.name = name;
        const rS = await companyLoad.save();
        if (!rS?.id) throw new Error("Güncelleme başarısız");
        const company = await Company.findOne({ where: { id: rS?.companyId } });
        //ad varsa adde eklenebilir
        return { ...companyLoad, company: company };
      } catch (e) {
        throw new Error(e);
      }
    },
    deleteCompanyLoad: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyLoad = await CompanyLoad.delete({ id });
      if (companyLoad.affected === 1) return { success: true, msg: "silme başarılı" };
      throw new Error("Silme başarısız");
    },
  },
};

export default CompanyLoadResolver;
