import { Router } from 'express';
import { libroController } from '../controllers/libro.controller';
import { validate, validateParams } from '../middlewares/validate';
import { createLibroSchema, updateLibroSchema } from '../validations/libro.validation';
import { idParamSchema } from '../validations/params.validation';

const router = Router();

router.get('/', libroController.getAll);
router.get('/:id', validateParams(idParamSchema), libroController.getById);
router.post('/', validate(createLibroSchema), libroController.create);
router.put('/:id', validateParams(idParamSchema), validate(updateLibroSchema), libroController.update);
router.delete('/:id', validateParams(idParamSchema), libroController.delete);

export default router;