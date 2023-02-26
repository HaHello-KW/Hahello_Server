import { MySQLDataSource } from '../data-source';
import { Status_Body } from '../entity/Status_Body';
import { Request, Response } from 'express';

export default class Status_Body_Controller {
  //Create Pregnant
  add_Status_Body = async (req: Request, res: Response) => {
    let status_body_info = {
      User_id: req.body.User_id,
      Test_date: req.body.Test_date,
      Height: req.body.Height,
      Weight: req.body.Weight,
      Subun: req.body.Subun,
      Mugigil: req.body.Mugigil,
      Muscle: req.body.Muscle,
      Protein: req.body.Protein,
      Fat: req.body.Fat,
      Fat_Stomach: req.body.Fat_Stomach,
    };

    const status_body_Repo = MySQLDataSource.getRepository(Status_Body);
    const status_body = status_body_Repo.create(status_body_info);

    await status_body_Repo
      .save(status_body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read pregnant
  get_Status_Body = async (req: Request, res: Response) => {
    let info = req.body.Body_id;
    const status_body_Repo = MySQLDataSource.getRepository(Status_Body);

    await status_body_Repo
      .findOne({ where: { Body_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Status Body : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all pregnant
  get_All_Status_Body = async (req: Request, res: Response) => {
    const status_body_Repo = MySQLDataSource.getRepository(Status_Body);

    await status_body_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Status Body : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Pregnant
  update_Status_Body = async (req: Request, res: Response) => {
    const status_body_Repo = MySQLDataSource.getRepository(Status_Body);

    await status_body_Repo
      .createQueryBuilder()
      .update(Status_Body)
      .set(req.body)
      .where({ Body_id: req.body.Body_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Status Body : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete pregnant
  delete_Status_Body = async (req: Request, res: Response) => {
    const status_body_Repo = MySQLDataSource.getRepository(Status_Body);

    await status_body_Repo
      .createQueryBuilder()
      .delete()
      .from(Status_Body)
      .where({ Body_id: req.body.Body_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Status Body : ', data);
      })
      .catch((err) => console.log(err));
  };
}
