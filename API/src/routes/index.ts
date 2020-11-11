import { Router } from 'express';
import auth from './auth';
import product from './product';
import marcas from './marcas';
import modelos from './modelos';

const routes = Router();

routes.use('/auth', auth);
routes.use('/prod', product);
routes.use('/marcas', marcas);
routes.use('/modelos', modelos);


export default routes;