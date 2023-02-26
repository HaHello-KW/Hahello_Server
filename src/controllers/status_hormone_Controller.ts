import { MySQLDataSource } from '../data-source';
import { Status_Hormone } from '../entity/Status_Hormone';
import { Request, Response } from 'express';

export default class Status_Hormone_Controller {
  //Create Pregnant
  add_Status_Hormone = async (req: Request, res: Response) => {
    let status_hormone_info = {
      User_id: req.body.User_id,
      Test_date: req.body.Test_date,
      AMH: req.body.AMH,
      LH: req.body.LH,
      E2: req.body.E2,
      FSH: req.body.FSH,
      TSH: req.body.TSH,
    };

    const status_hormone_Repo = MySQLDataSource.getRepository(Status_Hormone);
    const status_hormone = status_hormone_Repo.create(status_hormone_info);

    await status_hormone_Repo
      .save(status_hormone)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read pregnant
  get_Status_Hormone = async (req: Request, res: Response) => {
    let info = req.body.Hormone_id;
    const status_hormone_Repo = MySQLDataSource.getRepository(Status_Hormone);

    await status_hormone_Repo
      .findOne({ where: { Hormone_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Status Hormone : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all pregnant
  get_All_Status_Hormone = async (req: Request, res: Response) => {
    const status_hormone_Repo = MySQLDataSource.getRepository(Status_Hormone);

    await status_hormone_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Status Hormone : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Pregnant
  update_Status_Hormone = async (req: Request, res: Response) => {
    const status_hormone_Repo = MySQLDataSource.getRepository(Status_Hormone);

    await status_hormone_Repo
      .createQueryBuilder()
      .update(Status_Hormone)
      .set(req.body)
      .where({ Hormone_id: req.body.Hormone_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Status Hormone : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete pregnant
  delete_Status_Hormone = async (req: Request, res: Response) => {
    const status_hormone_Repo = MySQLDataSource.getRepository(Status_Hormone);

    await status_hormone_Repo
      .createQueryBuilder()
      .delete()
      .from(Status_Hormone)
      .where({ Hormone_id: req.body.Hormone_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Status Hormone : ', data);
      })
      .catch((err) => console.log(err));
  };
}
