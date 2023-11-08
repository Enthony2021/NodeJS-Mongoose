import { Request, Response } from "express";
import Product from "../models/Product";

export default class ProductController {
  static async showProducts(req: Request, res: Response): Promise<void> {
    try {
      const products: Object = await Product.find().lean();

      res.render("products/all", { products });
    } catch (error) {
      console.log(error);
    }
  }

  static createProduct(req: Request, res: Response): void {
    res.render("products/create");
  }

  static async createProductPost(req: Request, res: Response): Promise<void> {
    try {
      const { name, image, price, description } = req.body;
      const product = new Product({ name, image, price, description });
      await product.save();

      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  }

  static async getProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const product = await Product.findById(id).lean();

      res.render("products/product", { product });
    } catch (error) {
      console.log(error);
    }
  }

  static async removeProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await Product.deleteOne({ _id: id });

      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  }

  static async editProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const product = await Product.findById(id).lean();

      res.render("products/edit", { product });
    } catch (error) {
      console.log(error);
    }
  }

  static async editProductPost(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, image, price, description } = req.body;
      const product = { name, image, price, description };
      await Product.updateOne({ _id: id }, product);

      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  }
}
