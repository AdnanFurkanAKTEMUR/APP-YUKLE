import { gql } from "graphql-tag";

const AcceptedOfferType = gql`
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

export default AcceptedOfferType;
