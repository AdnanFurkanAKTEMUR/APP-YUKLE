import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyBankAccount } from "./CompanyBankAccount";
import { CompanyUser } from "./CompanyUser";
import { CompanyTrailer } from "./CompanyTrailer";
import { CompanyTruck } from "./CompanyTrucks";
import { Ad } from "./Ads";
import { CompanyLoad } from "./CompanyLoad";
//ads eklenecek
@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyName!: string;

  @Column()
  address!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  vkn!: string;

  @Column({ type: "decimal" })
  point: number;

  @OneToMany(() => CompanyBankAccount, (cba) => cba.company)
  bankAccounts: CompanyBankAccount[];

  @OneToMany(() => CompanyUser, (c_u) => c_u.company)
  companyUsers: CompanyUser[];

  @OneToMany(() => CompanyTrailer, (c_t) => c_t.company)
  companyTrailers: CompanyTrailer[];

  @OneToMany(() => CompanyTruck, (c_t) => c_t.company)
  companyTrucks: CompanyTruck[];

  @OneToMany(() => CompanyLoad, (c_t) => c_t.company)
  companyLoads: CompanyLoad[];

  @OneToMany(() => Ad, (ad) => ad.company)
  ads: Ad[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
