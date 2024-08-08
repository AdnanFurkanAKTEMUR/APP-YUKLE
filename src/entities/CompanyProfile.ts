import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyUser } from "./CompanyUser";

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

  @Column({ type: "int", nullable: true })
  companyDocumentId: number;

  @Column({ type: "int", nullable: true })
  updatedBy: number;

  @Column({ type: "int", nullable: true })
  deletedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
