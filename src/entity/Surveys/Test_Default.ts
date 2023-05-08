import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tests } from './Tests';

@Entity({ name: 'Test_Default'})
export class Test_Default {
  @PrimaryGeneratedColumn('increment')
  Test_Default_ID!: number;

  @ManyToOne(() => Tests, (test) => test.test_date)
  Test_date!: Tests | Date;

  @Column({ type: 'char', nullable: false, length: 8 })
  Birth!: string; //'19980422'

  @Column({ type: 'int', nullable: false })
  Ovary_Type!: number; //1,2,3,4,5

  @Column({ type: 'char', nullable: false, length: 1})
  Married_Type!: string; //'A','B','C','D','E'

  // @Column({ nullable: false })
  // Is_Injection!: boolean; //
}

export default Test_Default;
