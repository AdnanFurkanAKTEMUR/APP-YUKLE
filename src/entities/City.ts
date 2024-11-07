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
import { District } from "./District";
import { Country } from "./Country";
import { Address } from "./Address";
import { CompanyRecord } from "./CompanyRecord";

//ads eklenecek
@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cityName: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @ManyToOne(() => Country, (country) => country.cities, { nullable: true })
  country?: Country | null;

  @OneToMany(() => District, (district) => district.city, { nullable: true })
  districts?: District[] | null;

  @OneToMany(() => Address, (address) => address.city, { nullable: true })
  addresses?: Address[] | null;

  @OneToMany(() => CompanyRecord, (companyRecord) => companyRecord.city, { nullable: true })
  companyRecords?: CompanyRecord[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
