import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import User_Default_Info from './User_Default_Info';

@Entity()
export class Pregnant {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  Pregnant_id!: number;

  @Column({ type: 'char' })
  @ManyToOne(() => User_Default_Info, (user_default_info) => user_default_info.Married_Type)
  User_Type!: string;

  @Column({ type: 'int', nullable: true })
  first_pregnant!: number;

  @Column({ type: 'int', nullable: true })
  second_pregnant!: number;

  @Column({ type: 'int', nullable: true })
  third_pregnant!: number;
}

export default Pregnant;
