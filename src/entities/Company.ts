import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Address } from "./Address";
import { CompanyDocument } from "./CompanyDocument";
import { CompanyUser } from "./CompanyUser";
import { Country } from "./Country";
import { City } from "./City";
import { District } from "./District";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyName!: string;

  @Column()
  officialsName!: string;

  @Column()
  companyPhoneNumber!: string;

  @Column()
  companyMail!: string;

  @Column({ type: "varchar", nullable: true })
  membershipNote: string | null;

  @Column()
  taxNumber!: string;

  @Column()
  companySector!: string;

  @Column()
  dailyTrip!: string;

  @Column()
  truckType!: string;

  @Column()
  taxAdministration: string;

  @Column({ type: "varchar", nullable: true })
  taxPlateDoc: string;

  @Column()
  messageConfirm!: boolean;

  @Column()
  kvkkConfirm!: boolean;

  @Column()
  otpVerification!: boolean;

  @Column()
  mailVerification!: boolean;

  @OneToMany(() => Address, (address) => address.company, { nullable: true })
  addresses?: Address[] | null;

  @ManyToOne(() => Country, (country) => country.companies)
  country: Country;

  @ManyToOne(() => City, (city) => city.companies)
  city: City;

  @ManyToOne(() => District, (district) => district.companies)
  district: District;

  @Column({ type: "varchar", length: 200 })
  addressDescription: string;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.company, {
    nullable: true,
  })
  companyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.company)
  companyUsers: CompanyUser[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
