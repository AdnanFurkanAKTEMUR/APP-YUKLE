"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("../../entities/City");
const District_1 = require("../../entities/District");
const DistrictResolvers = {
    Query: {
        getDistrict: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            try {
                const district = await District_1.District.find({ where: { id } });
                return district;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createDistrict: async (_parent, args, _context, _info) => {
            const { districtName, cityId, postalCode } = args.input;
            try {
                const district = District_1.District.create({
                    districtName: districtName,
                    postalCode: postalCode,
                });
                if (cityId) {
                    const city = await City_1.City.findOne({ where: { id: cityId } });
                    if (!city)
                        throw new Error("Hata: Şehir bulunamadı!");
                    district.city = city;
                }
                await district.save();
                return district;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = DistrictResolvers;
//# sourceMappingURL=DistrictResolver.js.map