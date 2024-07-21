import { makeExecutableSchema } from "@graphql-tools/schema";

import AdminUserType from "./types/AdminUserType";
import AdminUserResolver from "./resolvers/AdminUserResolver";

import CompanyType from "./types/CompanyType";
import CompanyResolver from "./resolvers/CompanyResolver";

import CompanyBankAccountType from "./types/CompanyBankAccountType";
import CompanyBankAccountResolver from "./resolvers/CompanyBankAccountResolver";

import CompanyLoadType from "./types/CompanyLoadType";
import CompanyLoadResolver from "./resolvers/CompanyLoadResolver";

import AdType from "./types/AdType";
import AdResolver from "./resolvers/AdResolver";
import CompanyUserType from "./types/CompanyUserType";
import CompanyUserResolver from "./resolvers/CompanyUserResolver";
import CompanyTruckResolver from "./resolvers/CompanyTruckResolver";
import CompanyTruckType from "./types/CompanyTruckType";
import CompanyTrailerType from "./types/CompanyTrailerType";
import CompanyTrailerResolver from "./resolvers/CompanyTrailerResolver";
import AuthType from "./types/AuthType";
import AuthResolver from "./resolvers/AuthResolver";
import GeneralInputTypes from "./types/GeneralInputTypes";
import TruckerUserType from "./types/TruckerUserType";
import TruckerUserResolver from "./resolvers/TruckerUserResolver";

const schema = makeExecutableSchema({
  typeDefs: [TruckerUserType, GeneralInputTypes, AdminUserType, AuthType, CompanyTrailerType, CompanyType, CompanyBankAccountType, CompanyLoadType, AdType, CompanyUserType, CompanyTruckType],
  resolvers: [TruckerUserResolver, AdminUserResolver, AuthResolver, CompanyTrailerResolver, CompanyResolver, CompanyBankAccountResolver, CompanyLoadResolver, AdResolver, CompanyUserResolver, CompanyTruckResolver],
});

export default schema;
