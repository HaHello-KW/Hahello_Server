import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';

export enum Question_Types {
  Threeline_Picker = 'Threeline_Picker',
  Button_Selector = 'Button_Selector',
  Sixline_Picker = 'Sixline_Picker',
  Hybrid_Type = 'Hybrid_Type',
}
export enum PickerType {
  DatePicker = 'DatePicker',
  NumberPicker = 'NumberPicker',
}
@Entity()
export class Questions {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Question_id!: number;

  @Column({ type: 'int', nullable: false })
  Pglevel!: number;

  @Column({ type: 'enum', enum: Question_Types, nullable: false })
  Question_type!: Question_Types;

  @Column({ type: 'varchar', nullable: true })
  QuestionTxt!: string;

  @Column('simple-json', { nullable: true })
  SelectionTxt!: {
    contents: string[];
  };

  @Column({ type: 'enum', enum: PickerType, nullable: true })
  FirstPickerType!: PickerType;

  @Column({ type: 'varchar', nullable: true })
  FirstlineTxt!: string;

  @Column({ type: 'enum', enum: PickerType, nullable: true })
  SecondPickerType!: PickerType;

  @Column({ type: 'varchar', nullable: true })
  SecondlineTxt!: string;

  @Column({ type: 'enum', enum: PickerType, nullable: true })
  ThirdPickerType!: PickerType;

  @Column({ type: 'varchar', nullable: true })
  ThirdlineTxt!: string;

  @Column({ type: 'varchar', nullable: false })
  ImgPath!: string;
}
export default Questions;
