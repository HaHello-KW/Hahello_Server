import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Test from './Test';

@Entity()
export class Menstruation {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Menstruation_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test, (test) => test.Test_date)
  Test_date!: Date;

  @Column({ type: 'char', nullable: false })
  Last_menstruation_date!: string;
  //datetime -> string(char)로 받는게 더 쉬울듯

  @Column({ type: 'int', nullable: false })
  Duration!: number;

  @Column({ type: 'int', nullable: false })
  Term!: number;

  @Column({ nullable: false })
  Is_repetitive!: boolean;
}

export default Menstruation;
