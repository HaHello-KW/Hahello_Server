import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Choices } from "./Choices";
import { User_Giver } from "./User_Giver";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Choices, (choice) => choice.Choice_Id)
  Id: string;

  @Column({ type: "varchar" })
  Pw: string;

  @Column({ type: "varchar" })
  Name: string;

  @Column({ type: "varchar" })
  Sex: string;

  @Column({ type: "varchar" })
  Birth: string;

  @Column({ type: "varchar", unique: true })
  Email: string;

  @Column({ type: "varchar", unique: true })
  @OneToMany(() => User_Giver, (user_giver) => user_giver.User_NickName)
  NickName!: string;

  @Column({ type: "varchar" })
  Address: string;
}

export default User;
