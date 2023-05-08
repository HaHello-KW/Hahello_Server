import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../Users/Users';
import {Status_Default} from './Status_Default'
@Entity({ name: 'Status_Body' })
export class Status_Body {
  @PrimaryGeneratedColumn('increment')
  Status_Body_ID!: number;

  @ManyToOne(() => Users, (user) => user.Users_ID)
  @JoinColumn({ name: 'User_id' })
  User_id!: Users | number;

  @ManyToOne(() => Status_Default, (test) => test.Status_Default_ID)
  @JoinColumn({ name: 'Test_id' })
  Test_id!: Status_Default | number;

  @Column({ type: 'float', nullable: true })
  Subun!: number;

  @Column({ type: 'float', nullable: true })
  Mugigil!: number;

  @Column({ type: 'float', nullable: true })
  Muscle!: number;

  @Column({ type: 'float', nullable: true })
  Protein!: number;

  @Column({ type: 'float', nullable: true })
  Fat!: number;

  @Column({ type: 'float', nullable: true })
  Fat_Stomach!: number;
}

export default Status_Body;
