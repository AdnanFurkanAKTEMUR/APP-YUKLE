"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const AdminUser_1 = require("./entities/AdminUser");
const Address_1 = require("./entities/Address");
const City_1 = require("./entities/City");
const CompanyDocument_1 = require("./entities/CompanyDocument");
const Company_1 = require("./entities/Company");
const CompanyUser_1 = require("./entities/CompanyUser");
const Country_1 = require("./entities/Country");
const District_1 = require("./entities/District");
const Offer_1 = require("./entities/Offer");
dotenv_1.default.config();
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.POSTGRES_CONNECTION_STRING,
    entities: [
        Address_1.Address,
        AdminUser_1.AdminUser,
        City_1.City,
        CompanyDocument_1.CompanyDocument,
        Company_1.Company,
        CompanyUser_1.CompanyUser,
        Country_1.Country,
        District_1.District,
        Offer_1.Offer,
    ],
    synchronize: true,
});
//# sourceMappingURL=typeorm.config.js.map