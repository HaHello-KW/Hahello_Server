import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Question_Types, Picker_Types, Page_Types } from '../Enums/question_const';

@Entity({ name: 'Questions' })
export class Questions {
  @PrimaryGeneratedColumn('increment')
  Questions_ID!: number;

  @Column({ type: 'enum', enum: Page_Types, nullable: false })
  page_type!: Page_Types;

  @Column({ type: 'varchar', nullable: false })
  page_name!: string;

  @Column({ type: 'int', nullable: false })
  page_level!: number;

  @Column({ type: 'enum', enum: Question_Types, nullable: false })
  question_type!: Question_Types;

  @Column({ type: 'varchar', nullable: true })
  question_txt!: string;

  @Column('simple-json', { nullable: true })
  selection_txt!: {
    contents: string[];
  };

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  first_picker_type!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  first_line_txt!: string;

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  second_picker_type!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  second_line_txt!: string;

  @Column({ type: 'enum', enum: Picker_Types, nullable: true })
  third_picker_type!: Picker_Types;

  @Column({ type: 'varchar', nullable: true })
  third_line_txt!: string;

  @Column({ type: 'varchar', nullable: true })
  img_path!: string;

  @Column({ type: 'varchar', nullable: false })
  next_page!: string;
}
export default Questions;

/*
 ** simple-json -> string[] 으로 변환 후 저장할 것.
 */
