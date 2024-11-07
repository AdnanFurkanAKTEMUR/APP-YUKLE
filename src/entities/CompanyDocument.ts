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

  @Column()
  createdBy!: number;

  @Column({ type: "int", nullable: true })
  updatedBy: number;

  @Column({ type: "int", nullable: true })
  deletedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
