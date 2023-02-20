import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Test from './Test';
@Entity()
export class Freezing {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Freezing_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test, (test) => test.Test_date)
  Test_date!: Date;

  @Column({ type: 'int', nullable: false })
  Freezing_past_experience!: number;

  @Column({ type: 'int', nullable: false })
  Freezing_egg_count!: number;
}

export default Freezing;
