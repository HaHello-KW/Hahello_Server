import { IntegerDataType } from "sequelize";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Test_Result from "./Test_Result";
import { User } from "./User";

@Entity()
export class User_Giver {
  @PrimaryGeneratedColumn({ type: "int" })
  Giver_ID: Number;

  @Column()
  @ManyToOne(() => User, (user) => user.NickName)
  @OneToMany(() => Test_Result, (test_result) => test_result.Giver_NickName)
  User_NickName: string;
}

export default User_Giver;
