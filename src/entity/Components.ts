import { IntegerDataType } from "sequelize";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import Choices from "./Choices";
import { Options } from "./Options";

@Entity()
export class Components {
  @PrimaryGeneratedColumn({ type: "int" })
  Component_Id: Number;

  @Column({ type: "varchar" })
  Path: string;

  @Column({ type: "int" })
  @ManyToOne(() => Options, (option) => option.Option_Id)
  @ManyToMany(() => Choices, (choice) => choice.Option_PK)
  Option_PK: Number;

  @Column({ type: "varchar" })
  Component_Name: string;

  @Column({ type: "varchar" })
  Position: string;
}

export default Components;
