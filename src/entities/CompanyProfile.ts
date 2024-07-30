import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyRecord } from "./CompanyRecord";
import { CompanyUser } from "./CompanyUser";

@Entity()
export class CompanyProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyRecordId!: number;

  @OneToOne(() => CompanyRecord, (cr) => cr.companyProfile)
  @JoinColumn({ name: "companyRecordId" })
  companyRecord: CompanyRecord;

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.companyProfile)
  companyUsers: CompanyUser[]

  @Column()
  companyCode: string;

  @Column()
  companyPhoneNumber: string;

  @Column()
  taxNumber: string;

  @Column()
  taxAdministration: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
