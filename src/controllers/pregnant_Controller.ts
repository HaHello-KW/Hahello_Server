import { MySQLDataSource } from '../data-source';
import { Pregnant } from '../entity/Pregnant';
import { Request, Response } from 'express';

export default class Pregnant_Controller {
  //Create Pregnant
  addSurvey_Pregnant = async (req: Request, res: Response) => {
    let pregnant_info = {
      User_Type: req.body.User_Type,
      first_pregnant: req.body.first_pregnant,
      second_pregnant: req.body.second_pregnant,
      third_pregnant: req.body.third_pregnant,
    };

    const pregnant_Repo = MySQLDataSource.getRepository(Pregnant);
    const pregnant = pregnant_Repo.create(pregnant_info);

    await pregnant_Repo
      .save(pregnant)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read pregnant
  getSurvey_pregnant = async (req: Request, res: Response) => {
    let info = req.body.Pregnant_id;
    const pregnant_Repo = MySQLDataSource.getRepository(Pregnant);

    await pregnant_Repo
      .findOne({ where: { Pregnant_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Pregnant : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all pregnant
  getSurvey_All_pregnant = async (req: Request, res: Response) => {
    const pregnant_Repo = MySQLDataSource.getRepository(Pregnant);

    await pregnant_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All pregnant : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Pregnant
  updateSurvey_pregnant = async (req: Request, res: Response) => {
    const pregnant_Repo = MySQLDataSource.getRepository(Pregnant);

    await pregnant_Repo
      .createQueryBuilder()
      .update(Pregnant)
      .set(req.body)
      .where({ Pregnant_id: req.body.Pregnant_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Pregnant : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete pregnant
  deleteSurvey_pregnant = async (req: Request, res: Response) => {
    const pregnant_Repo = MySQLDataSource.getRepository(Pregnant);

    await pregnant_Repo
      .createQueryBuilder()
      .delete()
      .from(Pregnant)
      .where({ Pregnant_id: req.body.Pregnant_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete pregnant : ', data);
      })
      .catch((err) => console.log(err));
  };
}
