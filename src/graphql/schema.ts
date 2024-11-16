import { makeExecutableSchema } from "@graphql-tools/schema";

import AuthType from "./types/AuthType";
import AuthResolver from "./resolvers/AuthResolver";
import GeneralInputTypes from "./types/GeneralInputTypes";
import AdminUserType from "./types/AdminUserType";
import AddressType from "./types/AddressType";
import CityType from "./types/CityType";
import CompanyDocumentType from "./types/CompanyDocumentType";
import CompanyType from "./types/CompanyType";
import CompanyUserType from "./types/CompanyUserType";
import CountryType from "./types/CountryType";
import DistrictType from "./types/DistrictType";
import OfferType from "./types/OfferType";
import AcceptedOfferType from "./types/AcceptedOfferType";
import AdminUserResolvers from "./resolvers/AdminUserResolver";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "@middlewares/graphqlShield";
import CompanyResolver from "./resolvers/CompanyResolver";
import CountryResolver from "./resolvers/CountryResolver";
import CityResolver from "./resolvers/CityResolver";
import DistrictResolvers from "./resolvers/DistrictResolver";
import CompanyUserResolver from "./resolvers/CompanyUserResolver";
import AddressResolver from "./resolvers/AddressResolver";

const schema = makeExecutableSchema({
  typeDefs: [
    AcceptedOfferType,
    AddressType,
    AdminUserType,
    AuthType,
    CityType,
    CompanyDocumentType,
    CompanyType,
    CompanyUserType,
    CountryType,
    DistrictType,
    GeneralInputTypes,
    OfferType,
  ],
  resolvers: [
    AuthResolver,
    AdminUserResolvers,
    CompanyResolver,
    CountryResolver,
    CityResolver,
    DistrictResolvers,
    CompanyUserResolver,
    AddressResolver,
  ],
});

const shieldedSchema = applyMiddleware(schema, permissions);

export default shieldedSchema;
