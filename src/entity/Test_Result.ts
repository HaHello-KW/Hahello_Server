import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { User_Giver } from './User_Giver';

@Entity()
export class Test_Result {
  @PrimaryGeneratedColumn({ type: 'int' })
  Result_ID!: Number;

  @Column({ type: 'varchar' })
  @ManyToOne(() => User_Giver, (user_giver) => user_giver.User_NickName)
  Giver_NickName!: string;

  @Column({ type: 'varchar' })
  RelationShip!: string;

  @Column({ type: 'varchar' })
  Concept!: string;

  @Column({ type: 'varchar' })
  Feeling!: string;

  @Column({ type: 'char' })
  MBTI!: string;

  @Column({ type: 'datetime' })
  Test_Date!: Date;
}

export default Test_Result;
