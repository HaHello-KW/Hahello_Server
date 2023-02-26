import { MySQLDataSource } from '../data-source';
import { Married } from '../entity/Married';
import { Request, Response } from 'express';

export default class Married_Controller {
  //Create Married
  add_Married = async (req: Request, res: Response) => {
    let married_info = {
      Test_date: req.body.Test_date,
      User_Type: req.body.User_Type,
      Married_age: req.body.Married_age,
    };

    const married_Repo = MySQLDataSource.getRepository(Married);
    const married = married_Repo.create(married_info);

    await married_Repo
      .save(married)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read married
  get_Married = async (req: Request, res: Response) => {
    let info = req.body.Marrid_id;
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .findOne({ where: { Married_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Married : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all married
  get_All_Married = async (req: Request, res: Response) => {
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Married : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Married
  update_Married = async (req: Request, res: Response) => {
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .createQueryBuilder()
      .update(Married)
      .set(req.body)
      .where({ Married_id: req.body.Marrid_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Married : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete married
  delete_Married = async (req: Request, res: Response) => {
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .createQueryBuilder()
      .delete()
      .from(Married)
      .where({ Married_id: req.body.Marrid_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Married : ', data);
      })
      .catch((err) => console.log(err));
  };
}
