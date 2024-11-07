import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyProfile } from "./CompanyProfile";

@Entity()
export class AdminUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int", default: 0, readonly: true })
  type: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column({ unique: true })
  email!: string;

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

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.updatedAdminUser, {
    nullable: true,
  })
  updatedCompanyProfiles?: CompanyProfile[] | null;

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.createdAdminUser, {
    nullable: true,
  })
  createdCompanyProfiles?: CompanyProfile[] | null;

  @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.deletedAdminUser, {
    nullable: true,
  })
  deletedCompanyProfiles?: CompanyProfile[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
