import { MySQLDataSource } from '../data-source';
import { Test_Default } from '../entity/Test_Default';
import { Request, Response } from 'express';

export default class Test_Default_Controller {
  add_Test_Default = async (req: Request, res: Response) => {
    let info = {
      Test_date: req.body.Test_date,
      Birth: req.body.Birth,
      Ovary_Type: req.body.Ovary_Type,
      Married_Type: req.body.Married_Type,
      Is_Injection: req.body.Is_Injection,
    };
    const test_default_Repo = MySQLDataSource.getRepository(Test_Default);
    const test_default = test_default_Repo.create(info);

    await test_default_Repo
      .save(test_default)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  get_Test_Default = async (req: Request, res: Response) => {
    let info = Number(req.params.Test_Default_id);
    const test_default_Repo = MySQLDataSource.getRepository(Test_Default);

    await test_default_Repo
      .findOne({ where: { Test_Default_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Test Default : ', data);
      })
      .catch((err) => console.log(err));
  };

  get_All_Test_Default = async (req: Request, res: Response) => {
    const test_default_Repo = MySQLDataSource.getRepository(Test_Default);

    await test_default_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Test Default : ', data);
      })
      .catch((err) => console.log(err));
  };

  update_Default = async (req: Request, res: Response) => {
    const test_default_Repo = MySQLDataSource.getRepository(Test_Default);

    await test_default_Repo
      .createQueryBuilder()
      .update(Test_Default)
      .set(req.body)
      .where({ Test_Default_id: req.body.Test_Default_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Test Default : ', data);
      })
      .catch((err) => console.log(err));
  };

  delete_Default = async (req: Request, res: Response) => {
    const test_default_Repo = MySQLDataSource.getRepository(Test_Default);

    await test_default_Repo
      .createQueryBuilder()
      .delete()
      .from(Test_Default)
      .where({ Test_Default_id: req.params.Test_Default_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Test Default : ', data);
      })
      .catch((err) => console.log(err));
  };
}
