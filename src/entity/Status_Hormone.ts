import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Status_Hormone {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Hormone_id!: number;

  @Column({ type: 'int' })
  Past_Experience!: number;

  @Column({ type: 'datetime' })
  Test_Date!: number;

  @Column({ type: 'datetime' })
  Hormone_Test_Date!: number;

  @Column({ type: 'float' })
  AMH!: number;

  @Column({ type: 'float' })
  LH!: number;

  @Column({ type: 'float' })
  E2!: number;

  @Column({ type: 'float' })
  FSH!: number;

  @Column({ type: 'float' })
  TSH!: number;
}

export default Status_Hormone;
