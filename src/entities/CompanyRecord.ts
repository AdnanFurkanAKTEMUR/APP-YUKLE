import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyProfile } from "./CompanyProfile";
import { Country } from "./Country";
import { City } from "./City";
import { District } from "./District";

@Entity()
export class CompanyRecord extends BaseEntity {
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

  @OneToOne(() => CompanyProfile, (companyProfile) => companyProfile.companyRecord, {
    nullable: true,
  })
  companyProfile?: CompanyProfile | null;

  @ManyToOne(() => Country, (country) => country.companyRecords)
  country: Country;

  @ManyToOne(() => City, (city) => city.companyRecords)
  city: City;

  @ManyToOne(() => District, (district) => district.companyRecords)
  district: District;

  @Column({ type: "varchar", length: 200 })
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
