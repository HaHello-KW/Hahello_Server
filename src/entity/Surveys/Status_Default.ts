import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../Users/Users';

@Entity({ name: 'Status_Default' })
export class Status_Default {
  @PrimaryGeneratedColumn('increment')
  Status_Default_ID!: number;

  @ManyToOne(() => Users, (user) => user.Users_ID)
  @JoinColumn({ name: 'User_id' })
  User_id!: Users | number;

  @Column({ type: 'int', nullable: false })
  Height!: number;

  @Column({ type: 'int', nullable: false })
  Weight!: number;
}
export default Status_Default;
