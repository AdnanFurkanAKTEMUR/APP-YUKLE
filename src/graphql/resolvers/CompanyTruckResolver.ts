import { Company } from "@entities/Company";
import { CompanyTruck } from "@entities/CompanyTrucks";

const CompanyTruckResolver = {
  Query: {
    getAllCompanyTruck: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyTruck = await CompanyTruck.find();
      return companyTruck;
    },
  },
  Mutation: {
    createCompanyTruck: async (_parent: any, args: any, _context: any, _info: any) => {
      const { name, companyId, adId } = args.input;
      const companyTruck = await CompanyTruck.create({ name, companyId, adId }).save();
      const company = await Company.findOne({ where: { id: companyId } });
      const result = {
        ...companyTruck,
        company: company,
      };
      return result;
    },
    // updateCompanyTruck: async (_parent: any, args: any, _context: any, _info: any) => {
    //   const { name, id } = args.input;
    //   const companyTruck = await CompanyTruck.findOne({ where: { id } });
    //   if (!companyTruck) throw new Error("Çekici bulunamadı!");
    //   if (name !== undefined) {
    //     companyTruck.name = name;
    //   }

    //   await companyTruck.save();
    //   return companyTruck;
    // },
  },
};

export default CompanyTruckResolver;
