import { MySQLDataSource } from '../data-source';
import { Test } from '../entity/Test';
import { Request, Response } from 'express';

export default class Test_Controller {
  add_Test = async (req: Request, res: Response) => {
    let info = {
      Test_date: req.body.Test_date,
      Test_user_id: req.body.Test_user_id,
    };
    const test_Repo = MySQLDataSource.getRepository(Test);
    const test = test_Repo.create(info);

    await test_Repo
      .save(test)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  get_Test = async (req: Request, res: Response) => {
    let info = Number(req.params.Test_id);
    const test_Repo = MySQLDataSource.getRepository(Test);

    await test_Repo
      .findOne({ where: { Test_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Test : ', data);
      })
      .catch((err) => console.log(err));
  };

  get_All_Test = async (req: Request, res: Response) => {
    const test_Repo = MySQLDataSource.getRepository(Test);

    await test_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Tests : ', data);
      })
      .catch((err) => console.log(err));
  };

  update_Test = async (req: Request, res: Response) => {
    const test_Repo = MySQLDataSource.getRepository(Test);

    await test_Repo
      .createQueryBuilder()
      .update(Test)
      .set(req.body)
      .where({ Test_id: req.body.Test_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Test : ', data);
      })
      .catch((err) => console.log(err));
  };

  delete_Test = async (req: Request, res: Response) => {
    const test_Repo = MySQLDataSource.getRepository(Test);

    await test_Repo
      .createQueryBuilder()
      .delete()
      .from(Test)
      .where({ Test_id: req.body.Test_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Test : ', data);
      })
      .catch((err) => console.log(err));
  };
}
