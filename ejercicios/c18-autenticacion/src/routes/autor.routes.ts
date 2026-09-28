import { Router } from 'express';
import { autorController } from '../controllers/autor.controller';
import { validate, validateParams } from '../middlewares/validate';
import { createAutorSchema, updateAutorSchema } from '../validations/autor.validation';
import { idParamSchema } from '../validations/params.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', autorController.getAll);
router.get('/:id', validateParams(idParamSchema), autorController.getById);

// Rutas protegidas solo para ADMIN
router.post('/', authenticate, authorize('ADMIN'), validate(createAutorSchema), autorController.create);
router.put('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), validate(updateAutorSchema), autorController.update);
router.delete('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), autorController.delete);

export default router;