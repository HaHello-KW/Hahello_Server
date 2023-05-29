import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Tests } from './Tests';
import { Question_Types } from '../Enums/question_const';

@Entity({ name: 'Test_Answers' })
export class Test_Answers {
  @PrimaryGeneratedColumn('increment')
  Test_Answers_ID!: number;

  @ManyToOne(() => Tests, (test) => test.Tests_ID)
  @JoinColumn({ name: 'test_id' })
  test_id!: Tests | number;

  @Column({ type: 'int', nullable: false })
  pglevel!: number;

  @Column({ type: 'int', nullable: false })
  question_id!: number;

  @Column({ type: 'enum', enum: Question_Types, nullable: false })
  question_Type!: Question_Types;

  @Column({ type: 'int', nullable: true })
  selection_Answer!: number;

  @Column({ type: 'varchar', nullable: true })
  firstline_Answer!: string;

  @Column({ type: 'varchar', nullable: true })
  secondline_Answer!: string;

  @Column({ type: 'varchar', nullable: true })
  thirdline_Answer!: string;
}

export default Test_Answers;
