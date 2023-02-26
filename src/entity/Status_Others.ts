import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Users from './Users';
export enum Medicines {
  None = 0,
  Vitmain = 1,
  Calcium = 2,
  Iron = 3,
  Yup = 4,
  Mag = 5,
  Omega3 = 6,
  Coenza = 7,
  Acetyl = 8,
  Zinc = 9,
  Les = 10,
  Ino = 11,
  Yoyo = 12,
  Cell = 13,
  Probio = 14,
  Glu = 15,
  Tyro = 16,
}
@Entity()
export class Status_Others {
  @PrimaryGeneratedColumn({ type: 'int' })
  @PrimaryGeneratedColumn('increment')
  Others_id!: number;

  @Column({ type: 'varchar', nullable: false })
  @ManyToOne(() => Users, (users) => users.ID)
  User_id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  Test_date!: string;

  @Column({ type: 'int', nullable: false })
  Cooking!: number;

  //medicine을 Enum으로 하기로 했는데 영양제가 여러가지 선택하게 될 시에는 배열형태로 저장해야하는지
  @Column({ type: 'enum', enum: Medicines, nullable: false })
  Medicine!: Medicines[];

  @Column({ nullable: false })
  Seafood_al!: boolean;

  //JSON은 Key_Value인데 Key, Value를 각각 어떻게 할 것인가??
  @Column('simple-json', { nullable: true })
  Disease!: {
    disease: string[];
  };
}

export default Status_Others;
