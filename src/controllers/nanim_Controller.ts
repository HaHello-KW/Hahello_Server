import { MySQLDataSource } from '../data-source';
import { Nanim } from '../entity/Nanim';
import { Request, Response } from 'express';

export default class Nanim_Controller {
  add_Nanim = async (req: Request, res: Response) => {
    let info = {
      Test_date: req.body.Test_date,
      Is_nanim: req.body.Is_nanim,
    };
    const nanim_Repo = MySQLDataSource.getRepository(Nanim);
    const nanim = nanim_Repo.create(info);

    await nanim_Repo
      .save(nanim)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  get_Nanim = async (req: Request, res: Response) => {
    let info = req.body.Nanim_id;
    const nanim_Repo = MySQLDataSource.getRepository(Nanim);

    await nanim_Repo
      .findOne({ where: { Nanim_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Nanim : ', data);
      })
      .catch((err) => console.log(err));
  };

  get_All_Nanim = async (req: Request, res: Response) => {
    const nanim_Repo = MySQLDataSource.getRepository(Nanim);

    await nanim_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Nanim : ', data);
      })
      .catch((err) => console.log(err));
  };

  update_Nanim = async (req: Request, res: Response) => {
    const nanim_Repo = MySQLDataSource.getRepository(Nanim);

    await nanim_Repo
      .createQueryBuilder()
      .update(Nanim)
      .set(req.body)
      .where({ Nanim_id: req.body.Nanim_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Nanim : ', data);
      })
      .catch((err) => console.log(err));
  };

  delete_Nanim = async (req: Request, res: Response) => {
    const nanim_Repo = MySQLDataSource.getRepository(Nanim);

    await nanim_Repo
      .createQueryBuilder()
      .delete()
      .from(Nanim)
      .where({ Nanim_id: req.body.Nanim_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Nanim : ', data);
      })
      .catch((err) => console.log(err));
  };
}
