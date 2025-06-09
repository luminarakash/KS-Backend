import express from 'express';
import { getReview } from '../controllers/aicontroller.js';

const router = express.Router();

router.post('/review', getReview);

export default router;
