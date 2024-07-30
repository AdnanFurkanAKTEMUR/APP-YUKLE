import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyProfile } from "./CompanyProfile";

@Entity()
export class CompanyUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userFirstName!: string;

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

  //createBy deleteBy updateBy

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
