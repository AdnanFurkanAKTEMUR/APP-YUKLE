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
import { AdminUser } from "./AdminUser";

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

  @ManyToOne(() => AdminUser, (adminUser) => adminUser.updatedCompanyProfiles, { nullable: true })
  updatedAdminUser?: AdminUser | null;

  @ManyToOne(() => AdminUser, (adminUser) => adminUser.createdCompanyProfiles, { nullable: true })
  createdAdminUser?: AdminUser | null;

  @ManyToOne(() => AdminUser, (adminUser) => adminUser.deletedCompanyProfiles, { nullable: true })
  deletedAdminUser?: AdminUser | null;

  @OneToOne(() => CompanyRecord, (companyRecord) => companyRecord.companyProfile)
  companyRecord: CompanyRecord;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
