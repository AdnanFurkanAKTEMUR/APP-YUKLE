import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./Company";

@Entity()
export class CompanyBankAccount extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  bankName!: string;

  @Column()
  iban!: string;

  @Column()
  bankAccountNumber!: string;

  @Column()
  accountUserName!: string;

  @Column()
  companyId!: number;

  @ManyToOne(() => Company, (company) => company.bankAccounts)
  company: Company;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
