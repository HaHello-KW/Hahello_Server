import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Choices } from './Old_Choices';
import { User_Giver } from './Old_User_Giver';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  /* @OneToMany(() => Choices, (choice) => choice.Choice_Id) */
  ID!: string;

  @Column({ type: 'varchar' })
  password!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  birth!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ type: 'varchar' })
  Address!: string;

  // @Column({ type: 'int' })
  // Height!: Number;

  // @Column({ type: 'int' })
  // Weight!: Number;
}

export default Users;
