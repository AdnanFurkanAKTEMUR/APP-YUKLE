import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { AdminUser } from "./entities/AdminUser";
import { Address } from "@entities/Address";
import { City } from "@entities/City";
import { CompanyDocument } from "@entities/CompanyDocument";

import { Company } from "@entities/Company";
import { CompanyUser } from "@entities/CompanyUser";
import { Country } from "@entities/Country";
import { District } from "@entities/District";
import { Offer } from "@entities/Offer";

dotenv.config();

export default new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_CONNECTION_STRING,
  entities: [
    Address,
    AdminUser,
    City,
    CompanyDocument,
    Company,
    CompanyUser,
    Country,
    District,
    Offer,
  ],
  synchronize: true,
});
