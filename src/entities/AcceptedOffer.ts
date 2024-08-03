import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AcceptedOffer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  offerId!: number;

  @Column()
  truckerId!: number;

  @Column()
  acceptedDate: Date;

  @Column()
  deletedDate: Date;

  @Column({ type: "bool", default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
