import * as express from 'express';
import Default_Controller from '../controllers/pages/Default_Controller';

const router = express.Router();

router.get('/', Default_Controller, (req, res) => {
    
})