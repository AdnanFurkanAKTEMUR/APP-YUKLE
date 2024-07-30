import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { District } from "./District";
import { Country } from "./Country";

//ads eklenecek
@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cityName: string;

  @Column({ type: "varchar", nullable: true })
  plateCode: string;

  @OneToMany(() => District, (district) => district.city)
  districts: District[];

  @Column()
  countryId!: number;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: "countryId" })
  country: Country;

  //updatedBy
  //createdBy

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
