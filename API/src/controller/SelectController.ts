import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Product } from '../entity/Product';

export class SelectController {

  static getMarcas = async (req: Request, res: Response) => {
    const userRepository = getRepository(Product);
    let prod;

    try {
      prod = await userRepository.createQueryBuilder()
                  .select("DISTINCT (marca)")
                  .execute();
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (prod.length > 0) {
      res.send(prod);
    } else {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static getModelos = async (req: Request, res: Response) => {
    const userRepository = getRepository(Product);
    let prod;

    try {
      prod = await userRepository.createQueryBuilder()
                  .select("DISTINCT (modelo)")
                  .execute();
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (prod.length > 0) {
      res.send(prod);
    } else {
      res.status(404).json({ message: 'Not result' });
    }
  };

}

export default SelectController;