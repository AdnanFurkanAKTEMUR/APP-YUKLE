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

  @Column({ type: "boolean", default: false })
  published: boolean;

  @Column({ type: "boolean", default: false })
  approved: boolean;

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

  @Column({ type: "int", nullable: true })
  publishedCompanyUserId: number | null;

  @ManyToOne(() => CompanyUser, (cu) => cu.publishAds)
  @JoinColumn({ name: "publishedCompanyUserId" })
  publishedCompanyUser: CompanyUser;

  @Column({ type: "int", nullable: true })
  approvedCompanyUserId: number | null;

  @ManyToOne(() => CompanyUser, (cu) => cu.approvedAds)
  @JoinColumn({ name: "approvedCompanyUserId" })
  approvedCompanyUser: CompanyUser;

  @OneToOne(() => CompanyLoad, (companyLoad) => companyLoad.ad)
  companyLoad: CompanyLoad;

  @OneToOne(() => CompanyTrailer, (companyTrailer) => companyTrailer.ad)
  companyTrailer: CompanyTrailer;

  @OneToOne(() => CompanyTruck, (companyTruck) => companyTruck.ad)
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
