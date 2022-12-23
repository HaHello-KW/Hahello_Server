import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Menstruation {
  @PrimaryGeneratedColumn()
  Menstruation_id!: number;

  @Column({ type: 'char' })
  last_date!: string;
  //datetime -> string(char)로 받는게 더 쉬울듯

  @Column({ type: 'int' })
  duration!: number;

  @Column({ type: 'int' })
  term!: number;

  @Column({ type: 'boolean' })
  is_repetitive!: boolean;
}

export default Menstruation;
