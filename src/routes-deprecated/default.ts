import * as express from 'express';

const router = express.Router();

interface defaultPageModel {
  pagename: string;
  id: number;
  pgLevel: number;
  questionType: string;
  questionTxt?: any;
  selectionTxt?: string[] | null;
  firstPickerType?: any;
  firstlineTxt?: any;
  secondPickerType?: any;
  secondlineTxt?: any;
  thirdPickerType?: any;
  thirdlineTxt?: any;
  nextpage?: string;
}

router.get('/', (req, res) => {
    res.send('this is default.ts get response')
});

router.post('/', async (req, res, next) => {
    try {
        res.send('this is default.ts post response')
    } catch (e) {
        console.error(e);
        next(e);
    }
})
export default router;