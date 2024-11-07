import { City } from "@entities/City";
import { Country } from "@entities/Country";
import { Context } from "@genType/genType";

const CityResolver = {
  Query: {
    getCity: async (_parent: any, args: any, _context: Context, _info: any) => {
      const { id } = args.input;
      try {
        const city = await City.find({ where: { id } });
        return city;
      } catch (e) {
        throw new Error(e);
      }
    },
  },

  Mutation: {
    createCity: async (_parent: any, args: any, _context: Context, _info: any) => {
      const { cityName, countryId, plateCode } = args.input;
      try {
        const city = City.create({
          cityName: cityName,
          plateCode: plateCode,
        });
        if (countryId) {
          const country = await Country.findOne({ where: { id: countryId } });
          if (!country) throw new Error("Hata: Ülke bulunamadı!");
          city.country = country;
        }
        await city.save();
        return city;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default CityResolver;
