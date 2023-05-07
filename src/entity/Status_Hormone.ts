import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Users} from './Users';
import {Status_Default} from './Status_Default'
@Entity({ name: 'Status_Hormone' })
export class Status_Hormone {
  @PrimaryGeneratedColumn('increment')
  Status_Hormone_id!: number;

  @ManyToOne(() => Users, (user) => user.Users_ID)
  @JoinColumn({ name: 'User_id' })
  User_id!: Users | number;

  @ManyToOne(() => Status_Default, (test) => test.Status_Default_ID)
  @JoinColumn({ name: 'Test_id' })
  Test_id!: Status_Default | number;

  @Column({ type: 'float', nullable: true })
  AMH!: number;

  @Column({ type: 'float', nullable: true })
  LH!: number;

  @Column({ type: 'float', nullable: true })
  E2!: number;

  @Column({ type: 'float', nullable: true })
  FSH!: number;

  @Column({ type: 'float', nullable: true })
  TSH!: number;
}

export default Status_Hormone;
