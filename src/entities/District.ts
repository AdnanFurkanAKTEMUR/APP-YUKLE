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
import { Company } from "./Company";

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

  @OneToMany(() => Address, (address) => address.district, { nullable: true })
  addresses?: Address[] | null;

  @OneToMany(() => Company, (company) => company.district, { nullable: true })
  companies?: Company[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
