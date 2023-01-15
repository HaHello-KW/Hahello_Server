import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Freezing {
  @PrimaryGeneratedColumn()
  Freezing_id!: number;

  @Column({ type: 'int' })
  Freezing_past_experience!: number;

  @Column({ type: 'int' })
  Freezing_egg_count!: number;

  @Column({ type: 'int' })
  Freezing_year!: number;
}

export default Freezing;
