import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Treatment {
  @PrimaryGeneratedColumn()
  Treatment_id!: number;

  @Column({ type: 'number' })
  Freezing_past_experience!: number;

  @Column({ type: 'boolean' })
  is_treatment!: boolean;
}

export default Treatment;
