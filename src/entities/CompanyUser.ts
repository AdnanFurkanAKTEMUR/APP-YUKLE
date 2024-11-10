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
import { Offer } from "./Offer";
import { Address } from "./Address";
import { CompanyDocument } from "./CompanyDocument";
import { Company } from "./Company";

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
  userImage?: string;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  company: Company;

  @OneToMany(() => Offer, (offer) => offer.createdCompanyUser)
  createdOffers: Offer[];

  @OneToMany(() => Offer, (offer) => offer.updatedCompanyUser)
  updatedOffers: Offer[];

  //one to manylerde nullable yapmaya gerek yok aynı
  @OneToMany(() => Address, (address) => address.createdCompanyUser, { nullable: true })
  createdAddresses?: Address[] | null;

  @OneToMany(() => Address, (address) => address.updatedCompanyUser, { nullable: true })
  updatedAddresses?: Address[] | null;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.createdCompanyUser, {
    nullable: true,
  })
  createdCompanyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.updatedCompanyUser, {
    nullable: true,
  })
  updatedCompanyDocuments?: CompanyDocument[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
