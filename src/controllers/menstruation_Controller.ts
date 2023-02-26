import { MySQLDataSource } from '../data-source';
import { Menstruation } from '../entity/Menstruation';
import { Request, Response } from 'express';

export default class Menstruation_Controller {
  //Create Menstruation
  add_Menstruation = async (req: Request, res: Response) => {
    let menstruation_info = {
      Test_date: req.body.Test_date,
      last_menstruation_date: req.body.last_menstruation_date,
      duration: req.body.duration,
      term: req.body.term,
      is_repetitive: req.body.is_repetitive,
    };

    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);
    const menstruation = menstruation_Repo.create(menstruation_info);

    await menstruation_Repo
      .save(menstruation)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read menstruation
  get_Menstruation = async (req: Request, res: Response) => {
    let info = req.body.Menstruation_id;
    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);

    await menstruation_Repo
      .findOne({ where: { Menstruation_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Menstruation : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all menstruation
  get_All_Menstruation = async (req: Request, res: Response) => {
    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);

    await menstruation_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All menstruation : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Menstruation
  update_Menstruation = async (req: Request, res: Response) => {
    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);

    await menstruation_Repo
      .createQueryBuilder()
      .update(Menstruation)
      .set(req.body)
      .where({ Menstruation_id: req.body.Menstruation_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Menstruation : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete Menstruation
  delete_Menstruation = async (req: Request, res: Response) => {
    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);

    await menstruation_Repo
      .createQueryBuilder()
      .delete()
      .from(Menstruation)
      .where({ Menstruation_id: req.body.Menstruation_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete menstruation : ', data);
      })
      .catch((err) => console.log(err));
  };
}
