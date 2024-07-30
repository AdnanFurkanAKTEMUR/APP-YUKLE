import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./City";

//ads eklenecek
@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  countryName: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];

  //updatedBy
  //createdBy

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
