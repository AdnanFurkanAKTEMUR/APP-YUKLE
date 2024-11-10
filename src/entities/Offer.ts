import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyUser } from "./CompanyUser";
import { Address } from "./Address";

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @Column()
  pickupDetail: string;

  @ManyToOne(() => Address, (address) => address.placeAddress)
  placeAddress: Address;

  @ManyToOne(() => Address, (address) => address.offersAddress)
  address: Address;

  @Column({ type: "bool", default: false })
  offersAccepted: boolean;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.createdOffers)
  createdCompanyUser!: CompanyUser;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.updatedOffers, { nullable: true })
  updatedCompanyUser?: CompanyUser | null;

  //accepted trucker user gelecek

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
