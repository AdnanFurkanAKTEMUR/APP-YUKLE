import { Ad } from "@entities/Ad";
import { Company } from "@entities/Company";
import { CompanyLoad } from "@entities/CompanyLoad";
import { CompanyTrailer } from "@entities/CompanyTrailer";
import { CompanyUser } from "@entities/CompanyUser";
import { Context } from "@genType/genType";

const AdResolver = {
  Query: {
    getAllAd: async (_parent: any, _args: any, _context: Context, _info: any) => {
      const ad = await Ad.find();
      return ad;
    },
    getAd: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id } = args.input;
      const { user } = context;
      console.log(user, "user");
      try {
        const ad = await Ad.findOne({ where: { id } });
        const company = await Company.findOne({ where: { id: ad?.companyId } });
        const companyTrailer = await CompanyTrailer.findOne({ where: { adId: id } });
        const companyLoad = await CompanyLoad.findOne({ where: { adId: id } });
        const createdUser = await CompanyUser.findOne({ where: { id: ad?.createdCompanyUserId } });
        let approvedUser: any;
        if (ad?.approvedCompanyUserId) approvedUser = await CompanyUser.findOne({ where: { id: ad?.approvedCompanyUserId } });
        let publishedUser: any;
        if (ad?.publishedCompanyUserId) publishedUser = await CompanyUser.findOne({ where: { id: ad?.publishedCompanyUserId } });
        return { ...ad, company: company, companyTrailer: companyTrailer, companyLoad: companyLoad, createdUser: createdUser, publishedUser: publishedUser, approvedUser: approvedUser };
      } catch (e) {
        throw new Error(e);
      }
    },
  },

  Mutation: {
    createAd: async (_parent: any, args: any, context: Context, _info: any) => {
      const { companyId, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck } = args.input;
      const { user } = context;
      if (!user) throw new Error("Yetki hatası!");
      try {
        const ad = await Ad.create({ createdCompanyUserId: user.user_id, companyId, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck }).save();
        if (ad) return ad;
        throw new Error("Oluşturulamadı!");
      } catch (e) {
        throw new Error(e);
      }
    },
    updateAd: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck, approved, published } = args.input;
      const { user } = context;
      if (!user) throw new Error("Yetki hatası!");
      try {
        const ad = await Ad.findOne({ where: { id } });
        if (!ad) throw new Error("Kayıt bulunamadı!");
        if (title) ad.title = title;
        if (active) ad.active = active;
        if (arrivalDate) ad.arrivalDate = arrivalDate;
        if (departureDate) ad.departureDate = departureDate;
        if (description) ad.description = description;
        if (documents) ad.documents = documents;
        if (doubleDirection) ad.doubleDirection = doubleDirection;
        if (driverPointFilter) ad.driverPointFilter = driverPointFilter;
        if (price) ad.price = price;
        if (prioty) ad.prioty = prioty;
        if (tonage) ad.tonage = tonage;
        if (trailer) ad.trailer = trailer;
        if (truck) ad.truck = truck;
        if (approved) ad.approved = approved;
        if (approved) ad.approvedCompanyUserId = user.user_id;
        if (published) ad.published = published;
        if (published) ad.publishedCompanyUserId = user.user_id;
        const sr = await ad.save();
        if (sr) return sr;
        throw new Error("Bir hata meydana geldi!");
      } catch (e) {
        throw new Error(e);
      }
    },
    deleteAd: async (_parent: any, args: any, context: Context, _info: any) => {
      const { id } = args.input;
      const { user } = context;
      console.log(user, "user");
      try {
        const ad = await Ad.delete({ id });
        if (ad.affected === 1) {
          const companyTrailer = await CompanyTrailer.findOne({ where: { adId: id } });
          if (companyTrailer) {
            companyTrailer.adId = null;
            await companyTrailer.save();
          }
          const companyLoad = await CompanyLoad.findOne({ where: { adId: id } });
          if(companyLoad){
            companyLoad.adId = null
            await companyLoad.save()
          }
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default AdResolver;
