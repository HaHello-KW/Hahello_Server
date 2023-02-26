import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Users from './Users';
@Entity()
export class Status_Hormone {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Hormone_id!: number;

  @Column({ type: 'varchar', nullable: false })
  @ManyToOne(() => Users, (users) => users.ID)
  User_id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  Test_date!: string;

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
