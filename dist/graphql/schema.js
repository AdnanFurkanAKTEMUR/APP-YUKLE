"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const AdminUserType_1 = __importDefault(require("./types/AdminUserType"));
const AdminUserResolver_1 = __importDefault(require("./resolvers/AdminUserResolver"));
const CompanyType_1 = __importDefault(require("./types/CompanyType"));
const CompanyResolver_1 = __importDefault(require("./resolvers/CompanyResolver"));
const CompanyBankAccountType_1 = __importDefault(require("./types/CompanyBankAccountType"));
const CompanyBankAccountResolver_1 = __importDefault(require("./resolvers/CompanyBankAccountResolver"));
const CompanyLoadType_1 = __importDefault(require("./types/CompanyLoadType"));
const CompanyLoadResolver_1 = __importDefault(require("./resolvers/CompanyLoadResolver"));
const AdType_1 = __importDefault(require("./types/AdType"));
const AdResolver_1 = __importDefault(require("./resolvers/AdResolver"));
const CompanyUserType_1 = __importDefault(require("./types/CompanyUserType"));
const CompanyUserResolver_1 = __importDefault(require("./resolvers/CompanyUserResolver"));
const CompanyTruckResolver_1 = __importDefault(require("./resolvers/CompanyTruckResolver"));
const CompanyTruckType_1 = __importDefault(require("./types/CompanyTruckType"));
const CompanyTrailerType_1 = __importDefault(require("./types/CompanyTrailerType"));
const CompanyTrailerResolver_1 = __importDefault(require("./resolvers/CompanyTrailerResolver"));
const AuthType_1 = __importDefault(require("./types/AuthType"));
const AuthResolver_1 = __importDefault(require("./resolvers/AuthResolver"));
const GeneralInputTypes_1 = __importDefault(require("./types/GeneralInputTypes"));
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [GeneralInputTypes_1.default, AdminUserType_1.default, AuthType_1.default, CompanyTrailerType_1.default, CompanyType_1.default, CompanyBankAccountType_1.default, CompanyLoadType_1.default, AdType_1.default, CompanyUserType_1.default, CompanyTruckType_1.default],
    resolvers: [AdminUserResolver_1.default, AuthResolver_1.default, CompanyTrailerResolver_1.default, CompanyResolver_1.default, CompanyBankAccountResolver_1.default, CompanyLoadResolver_1.default, AdResolver_1.default, CompanyUserResolver_1.default, CompanyTruckResolver_1.default],
});
exports.default = schema;
//# sourceMappingURL=schema.js.map