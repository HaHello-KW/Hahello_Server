import { MySQLDataSource } from '../data-source';
import { Freezing } from '../entity/Freezing';
import { Request, Response } from 'express';

export default class Freezing_Controller {
  //Create Freezing
  addSurvey_Freezing = async (req: Request, res: Response) => {
    let freezing_info = {
      Freezing_past_experience: req.body.Freezing_past_experience,
      Freezing_egg_count: req.body.Freezing_egg_count,
    };

    const freezing_Repo = MySQLDataSource.getRepository(Freezing);
    const freezing = freezing_Repo.create(freezing_info);

    await freezing_Repo
      .save(freezing)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read freezing
  getSurvey_freezing = async (req: Request, res: Response) => {
    let info = req.body.Freezing_id;
    const freezing_Repo = MySQLDataSource.getRepository(Freezing);

    await freezing_Repo
      .findOne({ where: { Freezing_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Freezing : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all freezing
  getSurvey_All_freezing = async (req: Request, res: Response) => {
    const freezing_Repo = MySQLDataSource.getRepository(Freezing);

    await freezing_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All freezing : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Freezing
  updateSurvey_freezing = async (req: Request, res: Response) => {
    const freezing_Repo = MySQLDataSource.getRepository(Freezing);

    await freezing_Repo
      .createQueryBuilder()
      .update(Freezing)
      .set(req.body)
      .where({ Freezing_id: req.body.Freezing_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Freezing : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete Freezing
  deleteSurvey_freezing = async (req: Request, res: Response) => {
    const freezing_Repo = MySQLDataSource.getRepository(Freezing);

    await freezing_Repo
      .createQueryBuilder()
      .delete()
      .from(Freezing)
      .where({ Freezing_id: req.body.Freezing_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete freezing : ', data);
      })
      .catch((err) => console.log(err));
  };
}
