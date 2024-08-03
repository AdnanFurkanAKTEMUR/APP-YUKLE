import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyUser } from "./CompanyUser";

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyUserId!: number;

  @Column()
  offerStartDate: Date;

  @Column()
  offerEndDate: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  offerPrice: number;

  @Column()
  transportType: string;

  @Column("decimal", { precision: 10, scale: 2 })
  cargoTonnage: number;

  @Column()
  transportedMaterial: string;

  @Column("decimal", { precision: 10, scale: 2 })
  loadWeight: number;

  @Column()
  truckTrailerType: string;

  @Column()
  transportDateTime: Date;

  @Column()
  installationType: string;

  @Column()
  packagingType: string;

  @Column()
  offerNote: string;

  @Column()
  counterOffer: number;

  //address tablosu idsi
  @Column()
  fastPickupId: number;

  //country tablosu idsi
  @Column()
  pickupCountryId: number;

  // city tablosu idsi
  @Column()
  pickupCityId: number;

  //dsitrict
  @Column()
  pickupDistrictId: number;

  //address tablosundaki description alanı
  @Column()
  placeDetail: string;

  @Column({ type: "bool", default: false })
  offersAccepted: boolean;

  @Column()
  createdBy!: number;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.offers, { nullable: false })
  @JoinColumn({ name: "companyUserId" })
  companyUser: CompanyUser;

  @Column({ type: "int", nullable: true })
  updatedBy: number;

  @Column({ type: "int", nullable: true })
  deletedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
