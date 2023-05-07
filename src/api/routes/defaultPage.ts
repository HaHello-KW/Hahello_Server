import { Router, Request, Response } from 'express';
import { MySQLDataSource } from '../../data-source';
import Questions from '../../entity/Questions';
import { Page_Types } from '../../entity/Enums/question_const';

const router = Router();


router.get('/', async (req, res, next) => {
    try {
        const questionRepository = MySQLDataSource.getRepository(Questions);
        const questions = await questionRepository.find({
        where: {
            PageType: Page_Types.DefaultPage,
        },
        order: {
            Questions_ID: 'ASC',
        }
        });
        if (questions.length === 0) {
            return res.status(404).json({ message: '질문 조회 실패' });
        }
        return res.status(200).json({ questions });
    } catch (err) {
        console.error(err);
        return next(err);
    }
});

router.post('/new', async (req, res, next) => {
    try {
        
    } catch (err) {
        console.error(err);
        return next(err);
    }
});
export default router;