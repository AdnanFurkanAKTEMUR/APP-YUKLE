import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,

  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { City } from "./City";
import { Address } from "./Address";
import { CompanyRecord } from "./CompanyRecord";

//ads eklenecek
@Entity()
export class District extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  districtName!: string;

  @ManyToOne(() => City, (city) => city.districts, { nullable: true })
  city?: City | null;

  @Column({ type: "varchar", nullable: true })
  postalCode: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @OneToMany(() => Address, (address) => address.district, { nullable: true })
  addresses?: Address[] | null;

  @OneToMany(() => CompanyRecord, (companyRecord) => companyRecord.district, { nullable: true })
  companyRecords?: CompanyRecord[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
