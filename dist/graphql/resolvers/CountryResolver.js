"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = require("../../entities/Country");
const CountryResolver = {
    Query: {
        getAllCountries: async (_parent, _args, _context, _info) => {
            try {
                const allCountries = await Country_1.Country.find();
                return allCountries;
            }
            catch (e) {
                throw new Error("Hata: Ülkeler getirilemedi!");
            }
        },
        getCountryById: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            try {
                const country = await Country_1.Country.findOne({ where: { id: id } });
                return country;
            }
            catch (_a) {
                throw new Error("Hata: Ülke getirilemedi!");
            }
        },
    },
    Mutation: {
        createCountry: async (_parent, args, _context, _info) => {
            const { countryName, plateCode } = args.input;
            try {
                const createdCountry = await Country_1.Country.create({
                    countryName: countryName,
                    plateCode: plateCode,
                }).save();
                return createdCountry;
            }
            catch (e) {
                throw new Error("db hatası" + e);
            }
        },
    },
};
exports.default = CountryResolver;
//# sourceMappingURL=CountryResolver.js.map