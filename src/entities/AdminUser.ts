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

  @Column({ nullable: true })
  verificationTokenExpires: Date;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordTokenExpires: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
