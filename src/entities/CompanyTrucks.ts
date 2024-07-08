import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ads";

@Entity()
export class CompanyTruck extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyTrucks)
  company: Company;

  @OneToOne(() => Ad, (ad) => ad.companyTruck)
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
