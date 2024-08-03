"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const OfferType = (0, graphql_tag_1.gql) `
  type Offer {
    id: Int
    companyUserId: Int
    companyUser: CompanyUser
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
    # address id
    fastPickupId: Int
    pickupCountryId: Int
    pickupCityId: Int
    pickupDistrictId: Int
    placeDetail: String
    offersAccepted: Boolean
    createdBy: CompanyUser
    updatedBy: Int
    deletedBy: Int
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Query {
    getAllOffer: [Offer]
    getOffer(input: getId): Offer
  }
`;
exports.default = OfferType;
//# sourceMappingURL=OfferType.js.map