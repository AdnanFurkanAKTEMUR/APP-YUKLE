import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";

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

  @Column()
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
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  @JoinColumn({ name: "companyId" })
  company: Company;

  //createBy deleteBy updateBy

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
