"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const OfferType = (0, graphql_tag_1.gql) `
  type Offer {
    id: Int
    offerStartDate: String
    offerEndDate: String
    offerPrice: Float
    transportType: String
    cargoTonnage: Float
    transportedMaterial: String
    loadWeight: Float
    truckTrailerType: String
    transportDateTime: String
    installationType: String
    packagingType: String
    offerNote: String
    counterOffer: Int
    pickupDetail: String
    placeAddress: Address
    address: Address
    offersAccepted: Boolean
    createdCompanyUser: CompanyUser
    updatedCompanyUser: CompanyUser
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllOffers: [Offer]
    getOfferById(id: Int!): Offer
  }

  input createOfferInput {
    offerStartDate: String!
    offerEndDate: String!
    offerPrice: Float!
    transportType: String!
    cargoTonnage: Float!
    transportedMaterial: String!
    loadWeight: Float!
    truckTrailerType: String!
    transportDateTime: String!
    installationType: String!
    packagingType: String!
    offerNote: String!
    counterOffer: Int!
    pickupDetail: String!
    placeAddressId: Int!
    addressId: Int!
    createdCompanyUserId: Int!
    updatedCompanyUserId: Int
    offersAccepted: Boolean
  }

  type Mutation {
    createOffer(input: createOfferInput): Offer
  }
`;
exports.default = OfferType;
//# sourceMappingURL=OfferType.js.map