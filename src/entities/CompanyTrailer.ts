import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ad";

//alanlar daha sonra genişletilecek
@Entity()
export class CompanyTrailer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyTrailers)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @Column({ nullable: true })
  adId: number;

  @OneToOne(() => Ad, (ad) => ad.companyTrailer)
  @JoinColumn({ name: "adId" })
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
