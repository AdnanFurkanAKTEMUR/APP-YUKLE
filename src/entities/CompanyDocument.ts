import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyProfile } from "./CompanyProfile";
import { CompanyUser } from "./CompanyUser";

@Entity()
export class CompanyDocument extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  documentTitle!: string;

  @Column()
  documentType!: string;

  @Column()
  documentFolder!: string;

  @ManyToOne(() => CompanyProfile, (companyProfile) => companyProfile.companyDocuments)
  companyProfile: CompanyProfile;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdCompanyDocuments, {
    nullable: true,
  })
  createdCompanyUser?: CompanyUser | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedCompanyDocuments, {
    nullable: true,
  })
  updatedCompanyUser?: CompanyUser | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.deletedCompanyDocuments, {
    nullable: true,
  })
  deletedCompanyUser?: CompanyUser | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
