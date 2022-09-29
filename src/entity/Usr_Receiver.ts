import { IntegerDataType } from "sequelize";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User_Receiver {
  @PrimaryGeneratedColumn({ type: "int" })
  Receiver_ID: Number;

  @Column()
  Reciver_Name: string;
}

export default User_Receiver;
