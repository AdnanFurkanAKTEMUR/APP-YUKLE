import { Ad } from "@entities/Ad";

const AdResolver = {
  Query: {
    getAllAd: async (_parent: any, _args: any, _context: any, _info: any) => {
      const ad = await Ad.find();
      return ad;
    },
  },
};

export default AdResolver;
