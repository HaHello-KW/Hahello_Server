// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Tests } from './Tests';

// @Entity({ name: 'Test_Detail' })
// export class Test_Default {
//   @PrimaryGeneratedColumn('increment')
//   Test_Detail_ID!: number;

//   @ManyToOne(() => Tests, (test) => test.test_date)
//   Test_date!: Tests | Date;

//   @Column({ type: 'int', nullable: true })
//   married_age!: number;

//   @Column({ type: 'int', nullable: true })
//   pregnant_first!: number;

//   @Column({ type: 'int', nullable: true })
//   pregnant_second!: number;

//   @Column({ type: 'int', nullable: true })
//   pregnant_third!: number;

//   @Column({ type: 'boolean'})
//   is_nanim!: boolean;

//   @Column({ type: 'datetime'})
//   last_menstruation_date!: Date;

//   @Column({ type: 'int'})
//   manstruation_duration!: number;

//   @Column({ type: 'int'})
//   manstruation_term!: number;

//   @Column({ type: 'boolean'})
//   manstruation_is_repetitive!: boolean;
// }

// export default Test_Default;
