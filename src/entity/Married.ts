import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Choices } from './Choices';
import User_Default_Info from './User_Default_Info';
import { User_Giver } from './User_Giver';

@Entity()
export class Married {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  Married_id!: Number;

  @Column({ type: 'char' })
  @ManyToOne(() => User_Default_Info, (user_default_info) => user_default_info.Married_Type)
  User_Type!: string;

  @Column({ type: 'int', nullable: true })
  Marriage_age!: string;
}

export default Married;
