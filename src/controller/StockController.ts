import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Stock } from '../entity/Stock';

export class StockController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Stock);
    let prod;

    try {
      prod = await userRepository.find();
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (prod.length > 0) {
      res.send(prod);
    } else {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepository = getRepository(Stock);
    try {
      const prod = await userRepository.findOneOrFail(id);
      res.send(prod);
    } catch (e) {
      res.status(404).json({ message: 'Not result' });
    }
  };

  // static new = async (req: Request, res: Response) => {
  //   const { username, password, role } = req.body;
  //   const user = new Product();

  //   // user.username = username;
  //   // user.password = password;
  //   // user.role = role;

  //   // Validate
  //   const validationOpt = { validationError: { target: false, value: false } };
  //   const errors = await validate(user, validationOpt);
  //   if (errors.length > 0) {
  //     return res.status(400).json(errors);
  //   }

  //   // TODO: HASH PASSWORD

  //   const userRepository = getRepository(Product);
  //   try {
  //     user.hashPassword();
  //     await userRepository.save(user);
  //   } catch (e) {
  //     return res.status(409).json({ message: 'Username already exist' });
  //   }
  //   // All ok
  //   //res.send('User created');  this line change by line 61.
  //   res.status(201).json({ message : 'User Created !'});
  // };

  // static edit = async (req: Request, res: Response) => {
  //   let user;
  //   const { id } = req.params;
  //   const { username, role } = req.body;

  //   const userRepository = getRepository(Product);
  //   // Try get user
  //   try {
  //     user = await userRepository.findOneOrFail(id);
  //     user.username = username;
  //     user.role = role;
  //   } catch (e) {
  //     return res.status(404).json({ message: 'User not found' });
  //   }
  //   const validationOpt = { validationError: { target: false, value: false } };
  //   const errors = await validate(user, validationOpt);

  //   if (errors.length > 0) {
  //     return res.status(400).json(errors);
  //   }

  //   // Try to save user
  //   try {
  //     await userRepository.save(user);
  //   } catch (e) {
  //     return res.status(409).json({ message: 'Username already in use' });
  //   }

  //   res.status(201).json({ message: 'User update !' });
  // };

  // static delete = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const userRepository = getRepository(Product);
  //   let user: Product;

  //   try {
  //     user = await userRepository.findOneOrFail(id);
  //   } catch (e) {
  //     return res.status(404).json({ message: 'User not found' });
  //   }

  //   // Remove user
  //   userRepository.delete(id);
  //   res.status(201).json({ message: ' User deleted' });
  // };
}

export default StockController;