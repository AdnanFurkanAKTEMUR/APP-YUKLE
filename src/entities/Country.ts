import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { City } from "./City";
import { Address } from "./Address";
import { CompanyRecord } from "./CompanyRecord";

//ads eklenecek
@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  countryName: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @OneToMany(() => City, (city) => city.country, { nullable: true })
  cities?: City[] | null;

  @OneToMany(() => Address, (address) => address.country, { nullable: true })
  addresses?: Address[] | null;

  @OneToMany(() => CompanyRecord, (companyRecord) => companyRecord.country, { nullable: true })
  companyRecords?: CompanyRecord[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
