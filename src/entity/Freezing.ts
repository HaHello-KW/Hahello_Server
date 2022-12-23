import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Freezing {
  @PrimaryGeneratedColumn()
  Freezing_id!: number;

  @Column({ type: 'number' })
  Freezing_past_experience!: number;

  @Column({ type: 'number' })
  Freezing_egg_count!: number;
}

export default Freezing;
