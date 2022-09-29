import { IntegerDataType } from "sequelize";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { User } from "./User";
import { Questions } from "./Questions";
import { Components } from "./Components";

@Entity()
export class Choices {
  @PrimaryGeneratedColumn({ type: "int" })
  Choice_Id: Number;

  @Column({ type: "varchar" })
  @ManyToOne(() => User, (user) => user.Id)
  User_ID: string;

  @Column({ type: "int" })
  @ManyToOne(() => Questions, (question) => question.Question_ID)
  Question_PK: Number;

  @Column({ type: "int" })
  @ManyToMany(() => Components, (component) => component.Option_PK)
  Option_PK: Number;
}

export default Choices;
