import { IntegerDataType } from "sequelize";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Questions } from "./Questions";
import { Components } from "./Components";

@Entity()
export class Options {
  @PrimaryGeneratedColumn({ type: "int" })
  @OneToMany(() => Components, (component) => component.Option_PK)
  Option_Id!: Number;

  @Column({ type: "int" })
  @ManyToOne(() => Questions, (question) => question.Question_ID)
  Question_PK!: Number;

  @Column({ type: "int" })
  Option_Index!: Number;

  @Column({ type: "varchar" })
  Content!: string;
}

export default Options;
