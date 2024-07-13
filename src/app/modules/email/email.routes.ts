import { Router } from 'express';
import { emailControllers } from './email.controller';

const router = Router();
router.post('/', emailControllers.sendEmailFromServer);
export const emailRoutes = router;
