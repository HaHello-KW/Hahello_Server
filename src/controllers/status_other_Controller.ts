import { MySQLDataSource } from '../data-source';
import { Status_Others } from '../entity/Status_Others';
import { Request, Response } from 'express';

export default class Status_Others_Controller {
  //Create Pregnant
  add_Status_Others = async (req: Request, res: Response) => {
    let status_others_info = {
      User_id: req.body.User_id,
      Test_date: req.body.Test_date,
      Cooking: req.body.Cooking,
      Medicine: req.body.Medicine,
      Seafood_al: req.body.Seafood_al,
      Disease: req.body.Disease,
    };

    const status_others_Repo = MySQLDataSource.getRepository(Status_Others);
    const status_others = status_others_Repo.create(status_others_info);

    await status_others_Repo
      .save(status_others)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read pregnant
  get_Status_Others = async (req: Request, res: Response) => {
    let info = req.body.Others_id;
    const status_others_Repo = MySQLDataSource.getRepository(Status_Others);

    await status_others_Repo
      .findOne({ where: { Others_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Status Others : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all pregnant
  get_All_Status_Others = async (req: Request, res: Response) => {
    const status_others_Repo = MySQLDataSource.getRepository(Status_Others);

    await status_others_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Status Others : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Pregnant
  update_Status_Others = async (req: Request, res: Response) => {
    const status_others_Repo = MySQLDataSource.getRepository(Status_Others);

    await status_others_Repo
      .createQueryBuilder()
      .update(Status_Others)
      .set(req.body)
      .where({ Others_id: req.body.Others_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Status Others : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete pregnant
  delete_Status_Others = async (req: Request, res: Response) => {
    const status_others_Repo = MySQLDataSource.getRepository(Status_Others);

    await status_others_Repo
      .createQueryBuilder()
      .delete()
      .from(Status_Others)
      .where({ Others_id: req.body.Others_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Status Others : ', data);
      })
      .catch((err) => console.log(err));
  };
}
