import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyId!: number;

  @Column()
  addressName!: string;

  @Column()
  addressTitle!: string;

  @Column({ type: "varchar", nullable: true })
  addressDescription: string;

  @Column({ type: "varchar", nullable: true })
  addressType: string;

  @Column({ type: "int", nullable: true })
  CountryId!: number;

  @Column({ type: "int", nullable: true })
  CityId!: number;

  @Column({ type: "int", nullable: true })
  DistrictId!: number;

  //createdBy
  //updatedBy
  //deletedBy

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
