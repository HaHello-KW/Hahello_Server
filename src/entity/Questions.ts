import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User_Giver } from './User_Giver';
import { Options } from './Options';
import Choices from './Choices';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn({ type: 'int' })
  @OneToMany(() => Options, (option) => option.Question_PK)
  @OneToMany(() => Choices, (choice) => choice.Question_PK)
  Question_ID!: Number;

  @Column({ type: 'int' })
  Depth!: Number;

  @Column({ type: 'int' })
  Group!: Number;

  @Column({ type: 'int' })
  Index!: Number;

  @Column({ type: 'int' })
  Parent_PK!: Number;

  @Column({ type: 'varchar' })
  Content!: string;
}

export default Questions;
