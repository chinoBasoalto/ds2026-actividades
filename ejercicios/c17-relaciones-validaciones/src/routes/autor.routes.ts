import { Router } from 'express';
import { autorController } from '../controllers/autor.controller';
import { validate, validateParams } from '../middlewares/validate';
import { createAutorSchema, updateAutorSchema } from '../validations/autor.validation';
import { idParamSchema } from '../validations/params.validation';

const router = Router();

router.get('/', autorController.getAll);
router.get('/:id', validateParams(idParamSchema), autorController.getById);
router.post('/', validate(createAutorSchema), autorController.create);
router.put('/:id', validateParams(idParamSchema), validate(updateAutorSchema), autorController.update);
router.delete('/:id', validateParams(idParamSchema), autorController.delete);

export default router;