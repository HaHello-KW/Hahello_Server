import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Question_Types, Picker_Types, Page_Types } from './Enums/question_const';

@Entity({ name: 'Questions' })
export class Questions {
  @PrimaryGeneratedColumn('increment')
  Questions_ID!: number;

  @Column({ type: 'enum', enum: Page_Types, nullable: false})
  PageType!: Page_Types

  @Column({ type: 'int', nullable: false})
  Pglevel!: number;

  @Column({ type: 'enum', enum: Question_Types, nullable: false })
  Question_type!: Question_Types;

  @Column({ type: 'varchar', nullable: true })
  QuestionTxt!: string;

  @Column('simple-json', { nullable: true })
  SelectionTxt!: {
    contents: string[];
  };

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  FirstPickerType!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  FirstlineTxt!: string;

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  SecondPickerType!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  SecondlineTxt!: string;

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  ThirdPickerType!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  ThirdlineTxt!: string;

  @Column({ type: 'varchar', nullable: false })
  ImgPath!: string;
}
export default Questions;
