import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import Status_Hormone from './Status_Hormone';
import Status_Body from './Status_Body';
import Status_Others from './Status_Others';
import Test from './Test';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Status_Hormone, (status_hormone) => status_hormone.User_id)
  @OneToMany(() => Status_Body, (status_body) => status_body.User_id)
  @OneToMany(() => Status_Others, (status_others) => status_others.User_id)
  @OneToMany(() => Test, (test) => test.Test_user_id)
  ID!: string;

  //@Column({ type: 'varchar', nullable:false  })
  //Password!: string;

  @Column({ type: 'varchar', nullable: false })
  Name!: string;

  //@Column({ type: 'varchar' })
  //birth!: string;

  //@Column({ type: 'varchar', unique: true })
  //email!: string;

  //@Column({ type: 'varchar' })
  //address!: string;
}

export default Users;
