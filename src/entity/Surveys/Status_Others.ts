import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../Users/Users';
import {Status_Default} from './Status_Default'
import { DiseaseType, MedicineType } from '../Enums/const';
@Entity({ name: 'Status_Others' })
export class Status_Others {
  @PrimaryGeneratedColumn('increment')
  Status_Others_ID!: number;

  @ManyToOne(() => Users, (user) => user.Users_ID)
  @JoinColumn({ name: 'User_id' })
  User_id!: Users | number;

  @ManyToOne(() => Status_Default, (test) => test.Status_Default_ID)
  @JoinColumn({ name: 'Test_id' })
  Test_id!: Status_Default | number;

  @Column({ type: 'int', nullable: false })
  Cooking!: number;

  //medicine을 Enum으로 하기로 했는데 영양제가 여러가지 선택하게 될 시에는 배열형태로 저장해야하는지
  @Column({ type: 'enum', enum: MedicineType, nullable: false })
  Medicine!: MedicineType[];

  @Column({ nullable: false })
  Seafood_al!: boolean;

  @Column({ type: 'enum', enum: DiseaseType, nullable: false })
  Disease!: DiseaseType[];
}

export default Status_Others;
