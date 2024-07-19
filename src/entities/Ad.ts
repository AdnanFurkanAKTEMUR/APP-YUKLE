import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyUser } from "./CompanyUser";
import { CompanyLoad } from "./CompanyLoad";
import { CompanyTrailer } from "./CompanyTrailer";
import { Company } from "@entities/Company";
import { CompanyTruck } from "./CompanyTrucks";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  active!: boolean;

  @Column({ type: "decimal" })
  price!: number;

  @Column()
  prioty!: boolean;

  @Column()
  doubleDirection!: boolean;

  @Column()
  truck!: boolean;

  @Column()
  trailer!: boolean;

  @Column({ type: "decimal" })
  driverPointFilter!: number;

  @Column()
  tonage!: string;

  @Column()
  documents!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.ads)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @Column()
  createdCompanyUserId!: number;

  @ManyToOne(() => CompanyUser, (cu) => cu.createdAds)
  @JoinColumn({ name: "createdCompanyUserId" })
  createdCompanyUser: CompanyUser;

  @Column({ nullable: true })
  publishedCompanyUserId: number;

  @ManyToOne(() => CompanyUser, (cu) => cu.publishAds)
  @JoinColumn({ name: "publishedCompanyUserId" })
  publishedCompanyUser: CompanyUser;

  @Column({ nullable: true })
  approvedCompanyUserId: number;

  @ManyToOne(() => CompanyUser, (cu) => cu.approvedAds)
  @JoinColumn({ name: "approvedCompanyUserId" })
  approvedCompanyUser: CompanyUser;

  @Column()
  companyLoadId!: number;

  @OneToOne(() => CompanyLoad, (companyLoad) => companyLoad.ad)
  @JoinColumn({ name: "companyLoadId" })
  companyLoad: CompanyLoad;

  @Column({ nullable: true })
  companyTrailerId: number;

  @OneToOne(() => CompanyTrailer, (companyTrailer) => companyTrailer.ad)
  @JoinColumn({ name: "companyTrailerId" })
  companyTrailer: CompanyTrailer;

  @Column({ nullable: true })
  companyTruckId: number;

  @OneToOne(() => CompanyTruck, (companyTruck) => companyTruck.ad)
  @JoinColumn({ name: "companyTruckId" })
  companyTruck: CompanyTruck;

  @Column()
  departureDate: Date;

  @Column()
  arrivalDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
