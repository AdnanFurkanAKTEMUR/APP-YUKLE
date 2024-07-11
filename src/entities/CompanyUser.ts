import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";
import { Ad } from "./Ad";

@Entity()
export class CompanyUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  role!: string;

  @Column()
  companyId!: number;

  @Column()
  password!: string;

  @Column()
  verified!: boolean;

  @Column({ nullable: true })
  verificationTokenExpires: Date;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordTokenExpires: Date;

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
