import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './User';
import { Questions } from './Questions';
import { Components } from './Components';

@Entity()
export class Status_Hormone {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Hormone_id!: Number;

  @Column({ type: 'int' })
  Past_Experience!: Number;

  @Column({ type: 'datetime' })
  Test_Date!: Number;

  @Column({ type: 'datetime' })
  Hormone_Test_Date!: Number;

  @Column({ type: 'float' })
  AMH!: Number;

  @Column({ type: 'float' })
  LH!: Number;

  @Column({ type: 'float' })
  E2!: Number;

  @Column({ type: 'float' })
  FSH!: Number;

  @Column({ type: 'float' })
  TSH!: Number;
}

export default Status_Hormone;
