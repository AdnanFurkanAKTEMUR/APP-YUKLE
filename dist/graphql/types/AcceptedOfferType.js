"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AcceptedOfferType = (0, graphql_tag_1.gql) `
  type AcceptedOffer {
    id: Int
    offerId: Int
    truckerId: Int
    acceptedDate: String
    deletedDate: String
    status: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAcceptedOffers: [AcceptedOffer!]!
    getAcceptedOfferById(id: Int!): AcceptedOffer
  }

  type Mutation {
    createAcceptedOffer(offerId: Int!, truckerId: Int!, acceptedDate: String!, deletedDate: String!, status: Boolean): AcceptedOffer!
  }
`;
exports.default = AcceptedOfferType;
//# sourceMappingURL=AcceptedOfferType.js.map