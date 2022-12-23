import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './User';
import { Questions } from './Questions';
import { Components } from './Components';

@Entity()
export class Status_Body {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Body_id!: Number;

  @Column({ type: 'int' })
  Past_Experience!: Number;

  @Column({ type: 'datetime' })
  Test_Date!: Number;

  @Column({ type: 'datetime' })
  Body_Test_Date!: Number;

  @Column({ type: 'float' })
  Subun!: Number;

  @Column({ type: 'float' })
  Mugigil!: Number;

  @Column({ type: 'float' })
  Muscle!: Number;

  @Column({ type: 'float' })
  Protein!: Number;

  @Column({ type: 'float' })
  Fat!: Number;

  @Column({ type: 'float' })
  Fat_Stomach!: Number;
}

export default Status_Body;
