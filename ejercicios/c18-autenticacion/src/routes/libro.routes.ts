import { Router } from 'express';
import { libroController } from '../controllers/libro.controller';
import { validate, validateParams } from '../middlewares/validate';
import { createLibroSchema, updateLibroSchema } from '../validations/libro.validation';
import { idParamSchema } from '../validations/params.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', libroController.getAll);
router.get('/:id', validateParams(idParamSchema), libroController.getById);

// Rutas protegidas solo para ADMIN
router.post('/', authenticate, authorize('ADMIN'), validate(createLibroSchema), libroController.create);
router.put('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), validate(updateLibroSchema), libroController.update);
router.delete('/:id', authenticate, authorize('ADMIN'), validateParams(idParamSchema), libroController.delete);

export default router;