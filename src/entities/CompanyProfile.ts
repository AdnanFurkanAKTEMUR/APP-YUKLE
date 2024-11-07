import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyUser } from "./CompanyUser";
import { CompanyRecord } from "./CompanyRecord";
import { CompanyDocument } from "./CompanyDocument";
import { Address } from "./Address";

@Entity()
export class CompanyProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.companyProfile)
  companyUsers: CompanyUser[];

  @Column()
  companyCode: string;

  @Column()
  companyPhoneNumber: string;

  @Column()
  taxNumber: string;

  @Column()
  taxAdministration: string;

  @Column({ type: "varchar", nullable: true })
  taxPlateDoc: string;

  @OneToMany(() => CompanyDocument, (companyDocument) => companyDocument.companyProfile, {
    nullable: true,
  })
  companyDocuments?: CompanyDocument[] | null;

  @OneToMany(() => Address, (address) => address.companyProfile, { nullable: true })
  addresses?: Address[] | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdCompanyProfiles)
  createdCompanyUser: CompanyUser;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedCompanyProfiles, {
    nullable: true,
  })
  updatedCompanyUser?: CompanyUser | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.deletedCompanyProfiles, {
    nullable: true,
  })
  deletedCompanyUser?: CompanyUser | null;

  @OneToOne(() => CompanyRecord, (companyRecord) => companyRecord.companyProfile)
  companyRecord: CompanyRecord;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
