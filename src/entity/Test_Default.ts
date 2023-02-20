import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Test from './Test';

@Entity()
export class Test_Default {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Test_Default_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test, (test) => test.Test_date)
  Test_date!: Date;

  @Column({ type: 'varchar', nullable: false })
  Birth!: string;

  @Column({ type: 'int', nullable: false })
  Ovary_Type!: number;

  @Column({ type: 'char', nullable: false })
  Married_Type!: string;

  @Column({ nullable: false })
  Is_Injection!: boolean;
}

export default Test_Default;
