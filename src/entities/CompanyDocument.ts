import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyUser } from "./CompanyUser";
import { Company } from "./Company";

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

  @ManyToOne(() => Company, (company) => company.companyDocuments)
  company: Company;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdCompanyDocuments, {
    nullable: true,
  })
  createdCompanyUser?: CompanyUser | null;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedCompanyDocuments, {
    nullable: true,
  })
  updatedCompanyUser?: CompanyUser | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
