import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ads";

@Entity()
export class CompanyLoad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyLoads)
  company: Company;

  @OneToOne(() => Ad, (ad) => ad.companyLoad) 
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
