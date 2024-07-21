import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { AdminUser } from "./entities/AdminUser";
import { Ad } from "./entities/Ad";
import { Company } from "./entities/Company";
import { CompanyBankAccount } from "./entities/CompanyBankAccount";
import { CompanyLoad } from "./entities/CompanyLoad";
import { CompanyTrailer } from "./entities/CompanyTrailer";
import { CompanyTruck } from "./entities/CompanyTrucks";
import { CompanyUser } from "./entities/CompanyUser";
import { TruckerUser } from './entities/TruckerUser';
dotenv.config();

export default new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_CONNECTION_STRING,
  entities: [ TruckerUser,AdminUser, Ad, Company, CompanyBankAccount, CompanyLoad, CompanyTrailer, CompanyTruck, CompanyUser],
  synchronize: true,
});
