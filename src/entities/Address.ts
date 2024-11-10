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
import { CompanyUser } from "./CompanyUser";
import { Country } from "./Country";
import { City } from "./City";
import { District } from "./District";
import { Offer } from "./Offer";
import { Company } from "./Company";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Company, (company) => company.addresses)
  company: Company;

  @Column()
  addressName!: string;

  @Column()
  addressTitle!: string;

  @Column({ type: "varchar", nullable: true })
  addressDescription: string;

  @Column({ type: "varchar", nullable: true })
  addressType: string;

  @ManyToOne(() => Country, (country) => country.addresses)
  country: Country;

  @ManyToOne(() => City, (city) => city.addresses)
  city: City;

  @ManyToOne(() => District, (district) => district.addresses)
  district: District;

  @OneToMany(() => Offer, (offer) => offer.placeAddress)
  placeAddress: Offer[];

  @OneToMany(() => Offer, (offer) => offer.address)
  offersAddress: Offer[];

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdAddresses)
  createdCompanyUser: CompanyUser;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedAddresses, { nullable: true })
  updatedCompanyUser?: CompanyUser | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
