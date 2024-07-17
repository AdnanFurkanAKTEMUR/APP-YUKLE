import { CompanyTruck } from "@entities/CompanyTrucks";

const CompanyTruckResolver = {
  Query: {
    getAllCompanyTruck: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyTruck = await CompanyTruck.find();
      return companyTruck;
    },
  },


};

export default CompanyTruckResolver;
