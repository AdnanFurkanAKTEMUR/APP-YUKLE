import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ad";

@Entity()
export class CompanyTruck extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyTrucks)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @Column({ nullable: true })
  adId?: number;

  @OneToOne(() => Ad, (ad) => ad.companyTruck)
  @JoinColumn({ name: "adId" })
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
