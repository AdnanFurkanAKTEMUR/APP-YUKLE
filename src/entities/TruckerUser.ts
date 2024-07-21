import { BaseEntity, 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn } from "typeorm";


@Entity()
export class TruckerUser extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  TruckerName!: string;

  @Column()
  TruckerSurname!: string;

  @Column({unique:true})
  TruckerIdentificationNumer!: string;

  @Column({unique: true})
  TruckerMail!: string;

  @Column()
  TruckerPhone!: string;

  @Column()
  TruckerPassword!: string;

  @Column()
  TruckerUserName!: string;

  @Column()
  TruckerKvkk!: boolean;

  @Column()
  TruckerVerfied!: boolean;

  @Column({nullable: true})
  TruckerVerificationTokenExpires: Date;

  @Column({nullable: true})
  TruckerVerificationToken: string;

  @Column({nullable: true})
  TruckerResetPasswordToken: string;

  @Column({nullable: true})
  TruckerResetPasswordTokenExpires: string;

  @CreateDateColumn()
  TruckerCreatedAt!: Date;

  @UpdateDateColumn()
  TruckerUpdateAt!: Date;

}
