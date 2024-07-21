"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const AdminUser_1 = require("./entities/AdminUser");
const Ad_1 = require("./entities/Ad");
const Company_1 = require("./entities/Company");
const CompanyBankAccount_1 = require("./entities/CompanyBankAccount");
const CompanyLoad_1 = require("./entities/CompanyLoad");
const CompanyTrailer_1 = require("./entities/CompanyTrailer");
const CompanyTrucks_1 = require("./entities/CompanyTrucks");
const CompanyUser_1 = require("./entities/CompanyUser");
const TruckerUser_1 = require("./entities/TruckerUser");
dotenv_1.default.config();
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.POSTGRES_CONNECTION_STRING,
    entities: [TruckerUser_1.TruckerUser, AdminUser_1.AdminUser, Ad_1.Ad, Company_1.Company, CompanyBankAccount_1.CompanyBankAccount, CompanyLoad_1.CompanyLoad, CompanyTrailer_1.CompanyTrailer, CompanyTrucks_1.CompanyTruck, CompanyUser_1.CompanyUser],
    synchronize: true,
});
//# sourceMappingURL=typeorm.config.js.map