import gql from "graphql-tag";

const TruckerUserType = gql`
type Trucker {
   id: Int
   TruckerName: String
   TruckerSurname: String
   TruckerIdentificationNumer: String 
   TruckerMail: String
   TruckerPhone: String
   TruckerPassword: String
   TruckerUserName: String
   TruckerKvkk: Boolean
   TruckerVerfied: Boolean
   TruckerVerificationTokenExpires: String
   TruckerVerificationToken: String
   TruckerResetPasswordToken: String
   TruckerResetPasswordTokenExpires: String
   TruckerCreatedAt: String
   TruckerUpdateAt: String

}

input createTruckerInput{
    TruckerName: String!
    TruckerSurname: String!
    TruckerIdentificationNumer: String!
    TruckerMail: String!
    TruckerPhone: String!
    TruckerPassword: String!
    TruckerUserName: String!
}

type Query{
    getAllTruckerUser:[Trucker]
    getTruckerUser(input: getId): Trucker
}

type Mutation{
    createTruckerUser(input: createTruckerInput): Trucker
}
`;

export default TruckerUserType;