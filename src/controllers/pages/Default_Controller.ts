import { MySQLDataSource } from '../../data-source';
import { Test_Default } from '../../entity/Test_Default';
import { Test } from '../../entity/Test';
import { Married } from '../../entity/Married';
import { Pregnant } from '../../entity/Pregnant';
import { Request, Response } from 'express';

class Default_Controller {
  // request 데이터를 가지고 튜플 생성 (post)
  public static post_Default = async (req: Request, res: Response) => {
    let default_info = {
      Test_date: new Date(),
      Birth: req.body.Birth,
      Ovary_Type: req.body.Ovary_Type,
      Married_Type: req.body.Married_Type,
    };
    const date = default_info.Test_date;
    let married_info = {
      Test_date: date,
      User_Type: req.body.Married_Type,
    };
    let pregnant_info = {
      Test_date: date,
      User_Type: req.body.Married_Type,
    };

    const default_Repo = MySQLDataSource.getRepository(Test_Default);
    const married_Repo = MySQLDataSource.getRepository(Married);
    const test_default = default_Repo.create(default_info);
    const married = married_Repo.create(married_info);
    
    await default_Repo
      .save(test_default)
      .then(async () => {
        await married_Repo
            .save(married)
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            })
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
};
    

//     await married_Repo
//       .save(married)
//       .then(() => {
//         res.sendStatus(200);
//         //res.json(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.sendStatus(400);
//       });
  // Data 조회 기능 (Get)

  // 수정

  // 삭제

  //Create Freezing
  // add_Freezing = async (req: Request, res: Response) => {
  //   let freezing_info = {
  //     Test_date: req.body.Test_date,
  //     Freezing_past_experience: req.body.Freezing_past_experience,
  //     Freezing_egg_count: req.body.Freezing_egg_count,
  //   };

  //   const freezing_Repo = MySQLDataSource.getRepository(Freezing);
  //   const freezing = freezing_Repo.create(freezing_info);

  //   await freezing_Repo
  //     .save(freezing)
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // //Read freezing
  // get_Freezing = async (req: Request, res: Response) => {
  //   let info = req.body.Freezing_id;
  //   const freezing_Repo = MySQLDataSource.getRepository(Freezing);

  //   await freezing_Repo
  //     .findOne({ where: { Freezing_id: info } })
  //     .then((data) => {
  //       res.json(data);
  //       console.log('Get Freezing : ', data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // //Read all freezing
  // get_All_Freezing = async (req: Request, res: Response) => {
  //   const freezing_Repo = MySQLDataSource.getRepository(Freezing);

  //   await freezing_Repo
  //     .findAndCount()
  //     .then((data) => {
  //       res.json(data);
  //       console.log('Get All Freezing : ', data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // //Update Freezing
  // update_Freezing = async (req: Request, res: Response) => {
  //   const freezing_Repo = MySQLDataSource.getRepository(Freezing);

  //   await freezing_Repo
  //     .createQueryBuilder()
  //     .update(Freezing)
  //     .set(req.body)
  //     .where({ Freezing_id: req.body.Freezing_id })
  //     .execute()
  //     .then((data) => {
  //       res.json(data);
  //       console.log('Update Freezing : ', data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // //Delete Freezing
  // delete_Freezing = async (req: Request, res: Response) => {
  //   const freezing_Repo = MySQLDataSource.getRepository(Freezing);

  //   await freezing_Repo
  //     .createQueryBuilder()
  //     .delete()
  //     .from(Freezing)
  //     .where({ Freezing_id: req.body.Freezing_id })
  //     .execute()
  //     .then((data) => {
  //       res.json(data);
  //       console.log('Delete Freezing : ', data);
  //     })
  //     .catch((err) => console.log(err));
  // };
}
export default Default_Controller;
