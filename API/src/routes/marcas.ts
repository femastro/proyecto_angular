import { Router } from 'express';
import { SelectController } from '../controller/SelectController';

const router = Router();

// Get all Prod
router.get('/', SelectController.getMarcas);

// // Get one Prod
// router.get('/:id', /*[checkJwt, checkRole(['admin'])],*/ ProductController.getById);

// // Create a new Prod
// router.post('/', /*[checkJwt, checkRole(['admin'])],*/ ProductController.new);

// // Edit Prod
// router.patch('/:id', /*[checkJwt, checkRole(['admin'])],*/ ProductController.edit);

// // Delete Prod
// router.delete('/:id', /*[checkJwt, checkRole(['admin'])],*/ ProductController.delete);

export default router;