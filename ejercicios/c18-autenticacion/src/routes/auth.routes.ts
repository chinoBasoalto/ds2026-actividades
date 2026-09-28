import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { validate } from '../middlewares/validate';
import { registroSchema, loginSchema } from '../validations/auth.validation';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/registro', validate(registroSchema), authController.registro);
router.post('/login', validate(loginSchema), authController.login);
router.get('/yo', authenticate, authController.yo);

export default router;