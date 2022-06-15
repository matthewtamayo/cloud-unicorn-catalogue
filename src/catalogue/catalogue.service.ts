import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/model/product.model';

@Injectable()
export class CatalogueService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  //get all products
  async getProducts() {
    let products;
    try {
      products = await this.productModel.find().exec();
      if (!products) {
        throw new NotFoundException('product not found');
      }
    } catch (error) {
      throw new NotFoundException('500 error');
    }
    return products;
  }

  //get product by SKU
  async getProductBySku(productSku: string) {
    let product;
    try {
      product = await this.productModel.findOne({ sku: productSku });
      if (!product) {
        throw new NotFoundException('product not found');
      }
    } catch (error) {
      throw new NotFoundException('500 error');
    }
    return product;
  }

  //get products by category
  async getProductsByCategory(productsCategory: string) {
    let products;
    try {
      products = await this.productModel
        .find({ categories: productsCategory })
        .exec();
      if (!products) {
        throw new NotFoundException('products not found');
      }
    } catch (error) {
      throw new NotFoundException('500 error');
    }
    return products;
  }

  //get all categories
  async getCategories() {
    let cat;
    try {
      cat = await this.productModel.find().exec();
      let result = cat.map((res) => res.categories).flat();
      var filteredArray = result.filter(function (item, pos) {
        return result.indexOf(item) == pos;
      });
      if (!filteredArray) {
        throw new NotFoundException('categories not found');
      }
      return filteredArray;
    } catch (error) {
      throw new NotFoundException('500 error');
    }
  }
}
