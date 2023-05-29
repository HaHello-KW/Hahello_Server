import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from '../Users/Users';
@Entity({ name: 'Tests' })
export class Tests {
  @PrimaryGeneratedColumn('increment')
  Tests_ID!: number;

  @Column({ type: 'date' })
  test_date!: Date;

  @ManyToOne(() => Users, (users) => users.Users_ID)
  @JoinColumn({ name: 'Tester_Info' })
  event_Users_ID!: Users | number;
}
