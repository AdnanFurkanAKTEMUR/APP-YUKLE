import { makeExecutableSchema } from "@graphql-tools/schema";

import AuthType from "./types/AuthType";
import AuthResolver from "./resolvers/AuthResolver";
import GeneralInputTypes from "./types/GeneralInputTypes";
import AdminUserType from "./types/AdminUserType";
import AddressType from "./types/AddressType";
import CityType from "./types/CityType";
import CompanyDocumentType from "./types/CompanyDocument";
import CompanyProfileType from "./types/CompanyProfile";
import CompanyRecordType from "./types/CompanyRecord";
import CompanyUserType from "./types/CompanyUser";
import CountryType from "./types/CountryType";
import DistrictType from "./types/DistrictType";
import OfferType from "./types/OfferType";
import AcceptedOfferType from "./types/AcceptedOfferType";
import AdminUserResolvers from "./resolvers/AdminUserResolver";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "@middlewares/graphqlShield";

const schema = makeExecutableSchema({
  typeDefs: [AcceptedOfferType, AddressType, AdminUserType, AuthType, CityType, CompanyDocumentType, CompanyProfileType, CompanyRecordType, CompanyUserType, CountryType, DistrictType, GeneralInputTypes, OfferType],
  resolvers: [AuthResolver, AdminUserResolvers],
});

const shieldedSchema = applyMiddleware(schema, permissions);

export default shieldedSchema;
