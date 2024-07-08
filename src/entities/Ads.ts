import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { CompanyUser } from "./CompanyUser";
import { CompanyLoad } from "./CompanyLoad";
import { CompanyTrailer } from "./CompanyTrailer";
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
  company: Company;

  @ManyToOne(() => CompanyUser, (cu) => cu.createdAds)
  createdUser: CompanyUser;

  @ManyToOne(() => CompanyUser, (cu) => cu.publishAds)
  publishUser: CompanyUser;

  @ManyToOne(() => CompanyUser, (cu) => cu.approvedAds)
  approvedUser: CompanyUser;

  @OneToOne(() => CompanyLoad, (companyLoad) => companyLoad.ad)
  @JoinColumn()
  companyLoad: CompanyLoad;

  @OneToOne(() => CompanyTrailer, (companyTrailer) => companyTrailer.ad)
  @JoinColumn()
  companyTrailer: CompanyTrailer;

  @OneToOne(() => CompanyTruck, (companyTruck) => companyTruck.ad)
  @JoinColumn()
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
