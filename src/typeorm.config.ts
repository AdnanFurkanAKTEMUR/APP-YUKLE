import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Product } from "./entities/Product";
import { User } from "./entities/User";
import { AdminUser } from "./entities/AdminUser";
dotenv.config();

export default new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_CONNECTION_STRING,
  entities: [Product, User, AdminUser],
  synchronize: true,
});
