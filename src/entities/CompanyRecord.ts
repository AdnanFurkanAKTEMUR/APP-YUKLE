import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyProfile } from "./CompanyProfile";

@Entity()
export class CompanyRecord extends BaseEntity {
  //companyRecordId
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyName!: string;

  @Column()
  officialsName!: string;

  @Column()
  companyPhoneNumber!: string;

  @Column()
  companyMail!: string;

  @Column({ type: "varchar", nullable: true })
  membershipNote: string | null;

  @Column()
  taxNumber!: string;

  @Column()
  companySector: string;

  @Column()
  dailyTrip: string;

  @Column()
  truckType: string;

  @Column({ nullable: true, type: "int" })
  companyProfileId: number;

  @OneToOne(() => CompanyProfile, (companyProfile) => companyProfile.companyRecord)
  @JoinColumn({ name: "companyProfileId" })
  companyProfile: CompanyProfile;

  @Column({ type: "int", nullable: true })
  countryId: number;

  @Column({ type: "int", nullable: true })
  cityId: number;

  @Column({ type: "int", nullable: true })
  districtId: number;

  @Column()
  addressDescription: string;

  @Column()
  messageConfirm!: boolean;

  @Column()
  kvkkConfirm!: boolean;

  @Column({ type: "boolean", nullable: true })
  otpVerification: boolean;

  @Column({ type: "boolean", nullable: true })
  mailVerification: boolean;

  //@Column({ type: "int", nullable: true })
  //deletedBy, created, updated

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
