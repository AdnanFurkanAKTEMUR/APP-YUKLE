import { Country } from "@entities/Country";

const CountryResolver = {
  Query: {
    getAllCountries: async (
      _parent: any,
      _args: any,
      _context: any,
      _info: any
    ): Promise<Country[] | null> => {
      try {
        const allCountries = await Country.find();
        return allCountries;
      } catch (e) {
        throw new Error("Hata: Ülkeler getirilemedi!");
      }
    },
    getCountryById: async (
      _parent: any,
      args: any,
      _context: any,
      _info: any
    ): Promise<Country | null> => {
      const { id } = args.input;
      try {
        const country = await Country.findOne({ where: { id: id } });
        return country;
      } catch {
        throw new Error("Hata: Ülke getirilemedi!");
      }
    },
  },

  Mutation: {
    createCountry: async (
      _parent: any,
      args: any,
      _context: any,
      _info: any
    ): Promise<Country | null> => {
      const { countryName, plateCode } = args.input;
      //daha sonra admin user kontrolü konulacak!
      try {
        const createdCountry = await Country.create({
          countryName: countryName,
          plateCode: plateCode,
        }).save();
        return createdCountry;
      } catch (e) {
        throw new Error("db hatası" + e);
      }
    },
  },
};

export default CountryResolver;
