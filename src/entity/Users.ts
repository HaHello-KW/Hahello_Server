import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn('increment')
  Users_ID!: number;

  @Column({type: 'varchar', default: '홍길동'})
  name!: string;
}
