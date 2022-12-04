import { IntegerDataType } from 'sequelize';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Keet {
  @PrimaryGeneratedColumn({ type: 'int' })
  Keet_Id!: Number;

  @Column({ type: 'varchar' })
  Keet_Name!: string;

  @Column({ type: 'varchar' })
  Category!: string;

  @Column({ type: 'varchar' })
  Feeling!: string;

  @Column({ type: 'char' })
  MBTI!: string;

  @Column({ type: 'varchar' })
  Description!: string;
}

export default Keet;
