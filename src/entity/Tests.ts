import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';
@Entity({ name: 'Tests' })
export class Tests {
  @PrimaryGeneratedColumn('increment')
  Tests_ID!: number;

  @Column({ type: 'date' })
  test_date!: Date;

  @ManyToOne(() => Users, (users) => users.Users_ID)
  @JoinColumn({ name: 'event_Users_ID' })
  event_Users_ID!: Users | number;
}
