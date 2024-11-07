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
import { CompanyProfile } from "./CompanyProfile";
import { CompanyUser } from "./CompanyUser";
import { Country } from "./Country";
import { City } from "./City";
import { District } from "./District";
import { Offer } from "./Offer";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => CompanyProfile, (companyProfile) => companyProfile.addresses)
  companyProfile: CompanyProfile;

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

  @OneToMany(() => Offer, (offer) => offer.address)
  offersAddress: Offer[];

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdAddresses)
  createdCompanyUser: CompanyUser;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedAddresses, { nullable: true })
  updatedCompanyUser?: CompanyUser | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.deletedAddresses, { nullable: true })
  deletedCompanyUser?: CompanyUser | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
