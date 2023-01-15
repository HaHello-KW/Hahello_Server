import { MySQLDataSource } from '../data-source';
import { Users } from '../entity/Users';
import { User_Default_Info } from '../entity/User_Default_Info';
import { Freezing } from '../entity/Freezing';
import { Married } from '../entity/Married';
import { Pregnant } from '../entity/Pregnant';
import { Menstruation } from '../entity/Menstruation';
import { Request, Response } from 'express';

export default class UserController {
  //Create
  //==================================================================================================
  //Create default info
  addSurvey_Default = async (req: Request, res: Response) => {
    let default_info = {
      Birth: req.body.Birth,
      Ovary_Type: req.body.Ovary_Type,
      Married_Type: req.body.Married_Type,
      Is_Injection: req.body.Is_Injection,
    };

    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);
    const user_Default = user_Default_Repo.create(default_info);

    await user_Default_Repo
      .save(user_Default)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };
  //Create Married
  addSurvey_Married = async (req: Request, res: Response) => {
    let married_info = {
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
  //Create Menstruation
  addSurvey_Menstruation = async (req: Request, res: Response) => {
    let menstruation_info = {
      last_date: req.body.last_date,
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
  //==================================================================================================

  //Read one data by ID
  //==================================================================================================
  //Read default info
  getSurvey_Default = async (req: Request, res: Response) => {
    let info = req.body.User_Default_Info_id;
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .findOne({ where: { User_Default_Info_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get User Default Info : ', data);
      })
      .catch((err) => console.log(err));
  };
  //Read married
  getSurvey_married = async (req: Request, res: Response) => {
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
  //Read menstruation
  getSurvey_menstruation = async (req: Request, res: Response) => {
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
  //==================================================================================================

  //Read all data by ID
  //==================================================================================================
  //Read all default info
  getSurvey_All_Default = async (req: Request, res: Response) => {
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All User Default Info : ', data);
      })
      .catch((err) => console.log(err));
  };
  //Read all married
  getSurvey_All_married = async (req: Request, res: Response) => {
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All married : ', data);
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
  //Read all menstruation
  getSurvey_All_menstruation = async (req: Request, res: Response) => {
    const menstruation_Repo = MySQLDataSource.getRepository(Menstruation);

    await menstruation_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All menstruation : ', data);
      })
      .catch((err) => console.log(err));
  };
  //==================================================================================================

  //Update by ID
  //==================================================================================================
  //Update User Default Info
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
  //Update Married
  updateSurvey_married = async (req: Request, res: Response) => {
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
  //Update Menstruation
  updateSurvey_menstruation = async (req: Request, res: Response) => {
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
  //==================================================================================================

  //Delete by ID
  //==================================================================================================
  //Delete User Default Info
  deleteSurvey_Default = async (req: Request, res: Response) => {
    const user_Default_Repo = MySQLDataSource.getRepository(User_Default_Info);

    await user_Default_Repo
      .createQueryBuilder()
      .delete()
      .from(User_Default_Info)
      .where({ User_Default_Info_id: req.body.User_Default_Info_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete User : ', data);
      })
      .catch((err) => console.log(err));
  };
  //Delete married
  deleteSurvey_married = async (req: Request, res: Response) => {
    const married_Repo = MySQLDataSource.getRepository(Married);

    await married_Repo
      .createQueryBuilder()
      .delete()
      .from(Married)
      .where({ Married_id: req.body.Marrid_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete married : ', data);
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
  //Delete Menstruation
  deleteSurvey_menstruation = async (req: Request, res: Response) => {
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
