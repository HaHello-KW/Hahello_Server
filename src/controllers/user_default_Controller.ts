import { MySQLDataSource } from '../data-source';
import { User_Default_Info } from '../entity/User_Default_Info';
import { Request, Response } from 'express';

export default class User_Default_Controller {
  addUser_Default = async (req: Request, res: Response) => {
    let info = {
      Birth: req.body.Birth,
      Ovary_Type: req.body.Ovary_Type,
      Married_Type: req.body.Married_Type,
      Is_Injection: req.body.Is_Injection,
    };
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);
    const user_Default = user_Default_Repo.create(info);

    await user_Default_Repo
      .save(user_Default)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  getUser_Default = async (req: Request, res: Response) => {
    let info = req.params.Birth;
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .findOne({ where: { Birth: info } })
      .then((data) => {
        res.json(data);
        console.log('Get User Default Info : ', data);
      })
      .catch((err) => console.log(err));
  };

  getAllUsers_Default = async (req: Request, res: Response) => {
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All User Default Info : ', data);
      })
      .catch((err) => console.log(err));
  };

  updateSurvey_Default = async (req: Request, res: Response) => {
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .createQueryBuilder()
      .update(User_Default_Info)
      .set(req.body)
      .where({ User_Default_Info_id: req.body.User_Default_Info_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update User Default Info : ', data);
      })
      .catch((err) => console.log(err));
  };

  deleteUser_Default = async (req: Request, res: Response) => {
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .createQueryBuilder()
      .delete()
      .from(User_Default_Info)
      .where({ Birth: req.params.Birth })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete User : ', data);
      })
      .catch((err) => console.log(err));
  };
}
