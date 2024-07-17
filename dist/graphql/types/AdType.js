"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AdType = (0, graphql_tag_1.gql) `
  type Ad {
  active: Boolean
  approvedUser: CompanyUser
  arrivalDate: String
  company: Company
  companyId: Int
  companyLoad: CompanyLoad
  companyTrailer: CompanyTrailer
  companyTruck: CompanyTruck
  createdAt: String
  createdUser: CompanyUser
  departureDate: String
  description: String
  documents: String
  doubleDirection: Boolean
  driverPointFilter: Float
  id: Int
  price: Float
  prioty: Boolean
  publishUser: CompanyUser
  title: String
  tonage: String
  trailer: Boolean
  truck: Boolean
  updatedAt: String
}

  type Query {
    getAllAd: [Ad]
  }
`;
exports.default = AdType;
//# sourceMappingURL=AdType.js.map