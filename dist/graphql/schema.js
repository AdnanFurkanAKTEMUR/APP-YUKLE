"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const AuthType_1 = __importDefault(require("./types/AuthType"));
const AuthResolver_1 = __importDefault(require("./resolvers/AuthResolver"));
const GeneralInputTypes_1 = __importDefault(require("./types/GeneralInputTypes"));
const AdminUserType_1 = __importDefault(require("./types/AdminUserType"));
const AddressType_1 = __importDefault(require("./types/AddressType"));
const CityType_1 = __importDefault(require("./types/CityType"));
const CompanyDocument_1 = __importDefault(require("./types/CompanyDocument"));
const CompanyProfile_1 = __importDefault(require("./types/CompanyProfile"));
const CompanyRecord_1 = __importDefault(require("./types/CompanyRecord"));
const CompanyUser_1 = __importDefault(require("./types/CompanyUser"));
const CountryType_1 = __importDefault(require("./types/CountryType"));
const DistrictType_1 = __importDefault(require("./types/DistrictType"));
const OfferType_1 = __importDefault(require("./types/OfferType"));
const AcceptedOfferType_1 = __importDefault(require("./types/AcceptedOfferType"));
const AdminUserResolver_1 = __importDefault(require("./resolvers/AdminUserResolver"));
const graphql_middleware_1 = require("graphql-middleware");
const graphqlShield_1 = require("../middlewares/graphqlShield");
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [AcceptedOfferType_1.default, AddressType_1.default, AdminUserType_1.default, AuthType_1.default, CityType_1.default, CompanyDocument_1.default, CompanyProfile_1.default, CompanyRecord_1.default, CompanyUser_1.default, CountryType_1.default, DistrictType_1.default, GeneralInputTypes_1.default, OfferType_1.default],
    resolvers: [AuthResolver_1.default, AdminUserResolver_1.default],
});
const shieldedSchema = (0, graphql_middleware_1.applyMiddleware)(schema, graphqlShield_1.permissions);
exports.default = shieldedSchema;
//# sourceMappingURL=schema.js.map