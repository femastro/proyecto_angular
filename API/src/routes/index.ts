import { Router } from 'express';
import auth from './auth';
import product from './product';
import stock from './stock'

const routes = Router();

routes.use('/auth', auth);
routes.use('/prod', product);
routes.use('/stock', stock)

export default routes;