import Router from 'koa-router';
import { signup, login } from '../controllers/authController.js';

const router = new Router({ prefix: '/auth' });

router.post('/signup', signup);
router.post('/login', login);

export default router;
