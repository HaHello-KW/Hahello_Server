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

  @Column({ type: 'int', nullable: false })
  Height!: number;

  @Column({ type: 'int', nullable: false })
  Weight!: number;

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
