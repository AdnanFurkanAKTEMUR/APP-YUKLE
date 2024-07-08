import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ads";

@Entity()
export class CompanyUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  email!: string;

  @Column()
  role!: string;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  company: Company;

  @OneToMany(() => Ad, (ad) => ad.createdUser)
  createdAds: Ad[];

  @OneToMany(() => Ad, (ad) => ad.publishUser)
  publishAds: Ad[];

  @OneToMany(() => Ad, (ad) => ad.approvedUser)
  approvedAds: Ad[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
