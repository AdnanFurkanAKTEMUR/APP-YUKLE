import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";


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
  companySector!: string;

  @Column()
  dailyTrip!: string;

  @Column()
  truckType!: string;

  @Column({type:"int", nullable:true})
  companyProfileId: number;

  @Column()
  countryId!: number;

  @Column()
  cityId!: number;

  @Column()
  districtId!: number;

  @Column()
  addressDescription!: string;

  @Column()
  messageConfirm!: boolean;

  @Column()
  kvkkConfirm!: boolean;

  @Column()
  otpVerification!: boolean;

  @Column()
  mailVerification!: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
