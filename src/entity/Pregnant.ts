import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Choices } from './Choices';
import User_Default_Info from './User_Default_Info';
import { User_Giver } from './User_Giver';

@Entity()
export class Pregnant {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  Pregnant_id!: Number;

  @Column({ type: 'char' })
  @ManyToOne(() => User_Default_Info, (user_default_info) => user_default_info.Married_Type)
  User_Type!: string;

  @Column({ type: 'int', nullable: true })
  first_pregnant!: Number;

  @Column({ type: 'int', nullable: true })
  second_pregnant!: Number;

  @Column({ type: 'int', nullable: true })
  third_pregnant!: Number;
}

export default Pregnant;
