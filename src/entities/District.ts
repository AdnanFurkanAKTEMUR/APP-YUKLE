import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./City";

//ads eklenecek
@Entity()
export class District extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  districtName!: string;

  @Column()
  cityId!: number;

  @ManyToOne(() => City, (city) => city.districts)
  @JoinColumn({ name: "cityId" })
  city: City;

  @Column({ type: "varchar", nullable: true })
  postalCode: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
