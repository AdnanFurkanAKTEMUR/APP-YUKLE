import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ad";

@Entity()
export class CompanyLoad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyLoads)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @Column({ type: "int", nullable: true })
  adId: number | null;

  @OneToOne(() => Ad, (ad) => ad.companyLoad)
  @JoinColumn({ name: "adId" })
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
