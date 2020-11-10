import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Product } from '../entity/Product';

export class ProductController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Product);
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
    const userRepository = getRepository(Product);
    try {
      const prod = await userRepository.findOneOrFail(id);
      res.send(prod);
    } catch (e) {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static new = async (req: Request, res: Response) => {
    const { codArticulo, marca, modelo, medida, stock, codProveedor } = req.body;
    const prod = new Product();

    prod.codArticulo = codArticulo;
    prod.marca = marca;
    prod.modelo = modelo;
    prod.medida = medida;
    prod.stock = stock;
    prod.codProveedor = codProveedor;

    const userRepository = getRepository(Product);

    try {
      await userRepository.save(prod);
    } catch (e) {
      return res.status(409).json({ message: 'Article already exist' });
    }

    res.json({ message : 'Article Created !'});
  };

  static edit = async (req: Request, res: Response) => {
    let prod;
    const { id } = req.params;
    const { codArticulo, marca, modelo, medida, codProveedor } = req.body;

    const userRepository = getRepository(Product);
    // Try get Prod
    try {
        prod = await userRepository.findOneOrFail(id);
        prod.codArticulo = codArticulo;
        prod.marca = marca;
        prod.modelo = modelo;
        prod.medida = medida;
        prod.codProveedor = codProveedor;

    } catch (e) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Try to save Prod
    try {
      await userRepository.save(prod);
    } catch (e) {
      return res.status(409).json({ message: 'Article already in use' });
    }

    res.status(201).json({ message: 'Article update !' });
  };

  static delete = async (req: Request, res: Response) => {
     const { id } = req.params;
     const userRepository = getRepository(Product);
     let prod: Product;

     try {
       prod = await userRepository.findOneOrFail(id);
     } catch (e) {
       return res.status(404).json({ message: 'Article not found' });
     }

    // Remove Prod
    userRepository.delete(id);
    res.status(201).json({ message: ' Article deleted' });
  };
}

export default ProductController;