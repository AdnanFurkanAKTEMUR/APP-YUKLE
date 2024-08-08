import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyProfile } from "./CompanyProfile";
import { Offer } from "./Offer";

@Entity()
export class CompanyUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userFirstName!: string;

  @Column({ type: "int", default: 1, readonly: true })
  type: number;

  @Column()
  userLastName!: string;

  @Column({ unique: true })
  userEmail!: string;

  @Column({ default: "regular" })
  userRole!: string;

  @Column()
  userPassword!: string;

  @Column({ default: true })
  userStatus!: boolean;

  @Column({ nullable: true, type: "varchar" })
  userPhone: string;

  //s3teki yeri
  @Column({ nullable: true, type: "varchar" })
  userImage: string;

  @Column()
  companyProfileId!: number;

  @ManyToOne(() => CompanyProfile, (company) => company.companyUsers)
  @JoinColumn({ name: "companyProfileId" })
  companyProfile: CompanyProfile;

  @OneToMany(() => Offer, (offer) => offer.companyUser)
  offers: Offer[];

  @Column()
  createdBy!: number;

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
