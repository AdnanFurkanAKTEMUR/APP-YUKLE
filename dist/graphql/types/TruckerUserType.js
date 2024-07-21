"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const TruckerUserType = (0, graphql_tag_1.default) `
type Trucker {
   id: Int
   TruckerName: String
   TruckerSurname: String
   TruckerIdentificationNumer: String 
   TruckerMail: String
   TruckerPhone: String
   TruckerPassword:string
   TruckerUserName: string
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
    TruckerPassword:string!
    TruckerUserName: string!
}

type Query{
    getAllTrucker:[Trucker]
    getAdminUser(input: getId): Trucker
}

type Mutation{
    createTrucker(input: createTruckerInput): Trucker
}
`;
exports.default = TruckerUserType;
//# sourceMappingURL=TruckerUserType.js.map