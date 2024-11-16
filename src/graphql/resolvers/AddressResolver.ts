import { Address } from "@entities/Address";
import { City } from "@entities/City";
import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { Country } from "@entities/Country";
import { District } from "@entities/District";
import { Context } from "@genType/genType";

const AddressResolver = {
  Query: {
    getAllAddress: async (_parent: any, _args: any, context: Context, _info: any) => {
      const { user } = context;
      console.log(user, "user");
      if (!user || user.id == undefined)
        throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
      //sadece kendi userlarımıza
      try {
        const allAddresses = await Address.find();
        return allAddresses;
      } catch (e) {
        throw new Error(e);
      }
    },
    getAllCompanyAddress: async (_parent: any, _args: any, context: Context, _info: any) => {
      const { user } = context;
      if (!user || user.id == undefined)
        throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
      try {
        const companyAddresses = await Address.find({
          where: { company: { id: user.company_id } },
        });
        console.log(companyAddresses);
        return companyAddresses;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createAddress: async (_parent: any, args: any, context: Context, _info: any) => {
      const {
        addressName,
        addressTitle,
        addressDescription,
        addressType,
        countryId,
        cityId,
        districtId,
      } = args.input;
      const { user } = context;
      if (!user || user.id == undefined)
        throw new Error("Hata: Yetkisiz işlem kullanıcı bulunamadı!");
      try {
        const address = Address.create({
          addressName: addressName,
          addressTitle: addressTitle,
          addressDescription: addressDescription,
          addressType: addressType,
        });

        const city = await City.findOne({ where: { id: cityId } });
        const district = await District.findOne({ where: { id: districtId } });
        const country = await Country.findOne({ where: { id: countryId } });
        const company = await Company.findOne({ where: { id: user.company_id } });
        const cu = await CompanyUser.findOne({ where: { id: user.id } });
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
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default AddressResolver;
