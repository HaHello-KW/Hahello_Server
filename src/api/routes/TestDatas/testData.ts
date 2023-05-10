import { Router, Request, Response } from 'express';
import { MainDataSource } from '../../../data-source';
import { Tests } from '../../../entity/Surveys/Tests';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

dayjs().format('YYYY-MM-DD');

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const testRepository = MainDataSource.getRepository(Tests);
        const newTest = await testRepository.create({
            test_date: dayjs().toDate(),
            
        })
    }
    catch (err) {
        console.error(err);
        return next(err);
    }
});
