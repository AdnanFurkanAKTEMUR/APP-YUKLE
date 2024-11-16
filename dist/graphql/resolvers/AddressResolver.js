"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../../entities/Address");
const City_1 = require("../../entities/City");
const Company_1 = require("../../entities/Company");
const CompanyUser_1 = require("../../entities/CompanyUser");
const Country_1 = require("../../entities/Country");
const District_1 = require("../../entities/District");
const AddressResolver = {
    Query: {
        getAllAddress: async (_parent, _args, context, _info) => {
            const { user } = context;
            console.log(user, "user");
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
            try {
                const allAddresses = await Address_1.Address.find();
                return allAddresses;
            }
            catch (e) {
                throw new Error(e);
            }
        },
        getAllCompanyAddress: async (_parent, _args, context, _info) => {
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
            try {
                const companyAddresses = await Address_1.Address.find({
                    where: { company: { id: user.company_id } },
                });
                console.log(companyAddresses);
                return companyAddresses;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createAddress: async (_parent, args, context, _info) => {
            const { addressName, addressTitle, addressDescription, addressType, countryId, cityId, districtId, } = args.input;
            const { user } = context;
            if (!user || user.id == undefined)
                throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
            try {
                const address = Address_1.Address.create({
                    addressName: addressName,
                    addressTitle: addressTitle,
                    addressDescription: addressDescription,
                    addressType: addressType,
                });
                const city = await City_1.City.findOne({ where: { id: cityId } });
                const district = await District_1.District.findOne({ where: { id: districtId } });
                const country = await Country_1.Country.findOne({ where: { id: countryId } });
                const company = await Company_1.Company.findOne({ where: { id: user.company_id } });
                const cu = await CompanyUser_1.CompanyUser.findOne({ where: { id: user.id } });
                if (!company || !city || !country || !district || !cu)
                    throw new Error("Hata: Eksik bilgi!");
                address.company = company;
                address.city = city;
                address.district = district;
                address.country = country;
                address.createdCompanyUser = cu;
                address.updatedCompanyUser = cu;
                await address.save();
                return address;
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = AddressResolver;
//# sourceMappingURL=AddressResolver.js.map