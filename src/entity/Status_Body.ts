import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Users from './Users';
@Entity()
export class Status_Body {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Body_id!: number;

  @Column({ type: 'varchar', nullable: false })
  @ManyToOne(() => Users, (users) => users.ID)
  User_id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  Test_date!: string;

  @Column({ type: 'int' })
  Height!: number;

  @Column({ type: 'int' })
  Weight!: number;

  @Column({ type: 'float' })
  Subun!: number;

  @Column({ type: 'float' })
  Mugigil!: number;

  @Column({ type: 'float' })
  Muscle!: number;

  @Column({ type: 'float' })
  Protein!: number;

  @Column({ type: 'float' })
  Fat!: number;

  @Column({ type: 'float' })
  Fat_Stomach!: number;
}

export default Status_Body;
