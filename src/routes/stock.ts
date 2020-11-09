import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';

import { StockController } from './../controller/StockController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', StockController.getAll);

// Get one user
router.get('/:id', /*[checkJwt, checkRole(['admin'])],*/ StockController.getById);

// // Create a new user
// router.post('/', [checkJwt, checkRole(['admin'])], ProductController.new);

// // Edit user
// router.patch('/:id', [checkJwt, checkRole(['admin'])], ProductController.edit);

// // Delete
// router.delete('/:id', [checkJwt, checkRole(['admin'])], ProductController.delete);

export default router;