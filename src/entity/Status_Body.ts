import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Status_Body {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Body_id!: number;

  @Column({ type: 'int' })
  Past_Experience!: number;

  @Column({ type: 'datetime' })
  Test_Date!: number;

  @Column({ type: 'datetime' })
  Body_Test_Date!: number;

  @Column({ type: 'float' })
  Subun!: number;

  @Column({ type: 'float' })
  Mugigil!: number;

  @Column({ type: 'float' })
  Muscle!: number;

  @Column({ type: 'float' })
  Protein!: number;

  @Column({ type: 'float' })
  Fat!: number;

  @Column({ type: 'float' })
  Fat_Stomach!: number;
}

export default Status_Body;
