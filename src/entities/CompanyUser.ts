import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
  password!: string;

  @Column()
  verified!: boolean;

  @Column({ type: "timestamp", nullable: true })
  verificationTokenExpires: Date | null;

  @Column({ type: "varchar", nullable: true })
  verificationToken: string | null;

  @Column({ type: "varchar", nullable: true })
  resetPasswordToken: string | null;

  @Column({ type: "timestamp", nullable: true })
  resetPasswordTokenExpires: Date | null;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @OneToMany(() => Ad, (ad) => ad.createdCompanyUser)
  createdAds: Ad[];

  @OneToMany(() => Ad, (ad) => ad.publishedCompanyUser)
  publishAds: Ad[];

  @OneToMany(() => Ad, (ad) => ad.approvedCompanyUser)
  approvedAds: Ad[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
