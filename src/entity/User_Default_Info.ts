import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Choices } from './Choices';
import Married from './Married';
import Pregnant from './Pregnant';
import { User_Giver } from './User_Giver';

@Entity()
export class User_Default_Info {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  User_Default_Info_id!: Number;

  @Column({ type: 'varchar' })
  Birth!: string;

  @Column({ type: 'int' })
  Ovary_Type!: Number;

  @Column({ type: 'char' })
  @OneToMany(() => Married, (married) => married.User_Type)
  @OneToMany(() => Pregnant, (pregnant) => pregnant.User_Type)
  Married_Type!: string;

  @Column()
  Is_Injection!: boolean;
}

export default User_Default_Info;
