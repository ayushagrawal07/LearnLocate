
import { Router } from 'express';

import { createCoaching } from '../controllers/coaching.js';
import auth from '../middleware/auth.js';

const coachingRouter = Router();
coachingRouter.post('/', auth, createCoaching);
export default coachingRouter;