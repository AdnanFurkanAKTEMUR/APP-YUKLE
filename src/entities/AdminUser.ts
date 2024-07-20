import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AdminUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
