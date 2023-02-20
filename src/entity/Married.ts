import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Test from './Test';

@Entity()
export class Married {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Married_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test, (test) => test.Test_date)
  Test_date!: Date;

  @Column({ type: 'char', nullable: false })
  User_Type!: string;

  @Column({ type: 'int', nullable: true })
  Marriage_age!: string;
}

export default Married;
