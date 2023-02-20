import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Test from './Test';

@Entity()
export class Pregnant {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Pregnant_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test, (test) => test.Test_date)
  Test_date!: Date;

  @Column({ type: 'char', nullable: false })
  User_Type!: string;

  @Column({ type: 'int', nullable: true })
  first_pregnant!: number;

  @Column({ type: 'int', nullable: true })
  second_pregnant!: number;

  @Column({ type: 'int', nullable: true })
  third_pregnant!: number;
}

export default Pregnant;
