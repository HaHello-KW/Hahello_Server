import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import Users from './Users';
import Test_Default from './Test_Default';
import Nanim from './Nanim';
import Freezing from './Freezing';
import Married from './Married';
import Pregnant from './Pregnant';
import Menstruation from './Menstruation';
@Entity()
export class Test {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  Test_id!: number;

  @Column({ type: 'datetime', nullable: false, unique: true })
  @OneToOne(() => Test_Default, (test_default) => test_default.Test_date)
  @OneToOne(() => Nanim, (nanim) => nanim.Test_date)
  @OneToOne(() => Freezing, (freezing) => freezing.Test_date)
  @OneToOne(() => Married, (married) => married.Test_date)
  @OneToOne(() => Pregnant, (pregnant) => pregnant.Test_date)
  @OneToOne(() => Menstruation, (menstruation) => menstruation.Test_date)
  Test_date!: Date;

  @Column({ type: 'varchar', nullable: false })
  @ManyToOne(() => Users, (users) => users.ID)
  Test_user_id!: string;
}

export default Test;
