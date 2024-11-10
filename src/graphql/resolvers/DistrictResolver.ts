import { City } from "@entities/City";
import { District } from "@entities/District";
import { Context } from "@genType/genType";

const DistrictResolvers = {
  Query: {
    getDistrictById: async (_parent: any, args: any, _context: Context, _info: any) => {
      const { id } = args.input;
      try {
        const district = await District.find({ where: { id } });
        return district;
      } catch (e) {
        throw new Error(e);
      }
    },
    getAllDistricts: async (_parent: any, _args: any, _context: Context, _info: any) => {
      try {
        const districts = await District.find();
        return districts;
      } catch (e) {
        throw new Error(e);
      }
    },
  },

  Mutation: {
    createDistrict: async (_parent: any, args: any, _context: Context, _info: any) => {
      const { districtName, cityId, postalCode } = args.input;
      try {
        const district = District.create({
          districtName: districtName,
          postalCode: postalCode,
        });
        if (cityId) {
          const city = await City.findOne({ where: { id: cityId } });
          if (!city) throw new Error("Hata: Şehir bulunamadı!");
          district.city = city;
        }
        await district.save();
        return district;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default DistrictResolvers;
