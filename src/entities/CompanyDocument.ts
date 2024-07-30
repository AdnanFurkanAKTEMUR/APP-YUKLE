import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class CompanyDocument extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  documentTitle!: string;

  @Column()
  documentType!: string;

  @Column()
  documentFolder!: string;

  @Column()
  companyProfileId!: number;

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
