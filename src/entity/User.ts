import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  Id!: string;

  @Column({ type: 'varchar' })
  password!: string;

  @Column({ type: 'varchar' })
  Name!: string;

  @Column({ type: 'varchar' })
  Birth!: string;

  @Column({ type: 'varchar', unique: true })
  Email!: string;

  @Column({ type: 'varchar', unique: true })
  // @OneToMany(() => User_Giver, (user_giver) => user_giver.User_NickName)
  NickName!: string;

  @Column({ type: 'varchar' })
  Address!: string;

  @Column({ type: 'int' })
  Height!: number;

  @Column({ type: 'int' })
  Weight!: number;
}

export default User;
