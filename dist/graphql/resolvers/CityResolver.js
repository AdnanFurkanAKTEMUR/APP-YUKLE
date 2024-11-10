"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("../../entities/City");
const Country_1 = require("../../entities/Country");
const CityResolver = {
    Query: {
        getCityById: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            try {
                const city = await City_1.City.find({ where: { id } });
                return city;
            }
            catch (e) {
                throw new Error(e);
            }
        },
        getAllCities: async (_parent, _args, _context, _info) => {
            try {
                const cities = await City_1.City.find();
                return cities;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createCity: async (_parent, args, _context, _info) => {
            const { cityName, countryId, plateCode } = args.input;
            try {
                const city = City_1.City.create({
                    cityName: cityName,
                    plateCode: plateCode,
                });
                if (countryId) {
                    const country = await Country_1.Country.findOne({ where: { id: countryId } });
                    if (!country)
                        throw new Error("Hata: Ülke bulunamadı!");
                    city.country = country;
                }
                await city.save();
                return city;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = CityResolver;
//# sourceMappingURL=CityResolver.js.map