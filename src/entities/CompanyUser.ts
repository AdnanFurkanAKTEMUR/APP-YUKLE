import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyProfile } from "./CompanyProfile";
import { Offer } from "./Offer";
import { Address } from "./Address";
import { CompanyDocument } from "./CompanyDocument";

@Entity()
export class CompanyUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userFirstName!: string;

  @Column({ type: "int", default: 1, readonly: true })
  type: number;

  @Column()
  userLastName!: string;

  @Column({ unique: true })
  userEmail!: string;

  @Column({ default: "regular" })
  userRole!: string;

  @Column()
  userPassword!: string;

  @Column({ default: true })
  userStatus!: boolean;

  @Column({ nullable: true, type: "varchar" })
  userPhone: string;

  //s3teki yeri
  @Column({ nullable: true, type: "varchar" })
  userImage: string;

  @Column()
  companyProfileId!: number;

  @ManyToOne(() => CompanyProfile, (company) => company.companyUsers)
  @JoinColumn({ name: "companyProfileId" })
  companyProfile: CompanyProfile;

  @OneToMany(() => Offer, (offer) => offer.companyUser)
  offers: Offer[];

  @OneToMany(() => Address, (address) => address.createdCompanyUser, { nullable: true })
  createdAddresses?: Address[] | null;

  @OneToMany(() => Address, (address) => address.updatedCompanyUser, { nullable: true })
  updatedAddresses?: Address[] | null;

  @OneToMany(() => Address, (address) => address.deletedCompanyUser, { nullable: true })
  deletedAddresses?: Address[] | null;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.createdCompanyUser, {
    nullable: true,
  })
  createdCompanyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.updatedCompanyUser, {
    nullable: true,
  })
  updatedCompanyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.deletedCompanyUser, {
    nullable: true,
  })
  deletedCompanyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.createdCompanyUser, {
    nullable: true,
  })
  createdCompanyProfiles?: CompanyProfile[] | null;

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.updatedCompanyUser, {
    nullable: true,
  })
  updatedCompanyProfiles?: CompanyProfile[] | null;

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.deletedCompanyUser, {
    nullable: true,
  })
  deletedCompanyProfiles?: CompanyProfile[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
