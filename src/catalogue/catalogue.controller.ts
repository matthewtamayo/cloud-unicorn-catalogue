import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogueService } from './catalogue.service';

@ApiTags('Catalogue')
@Controller('/catalogue')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}

  @Get('/products')
  async getProducts() {
    const products = await this.catalogueService.getProducts();
    return products;
  }

  @Get('/product/:sku')
  async getProductBySku(@Param('sku') productSku: string) {
    const product = await this.catalogueService.getProductBySku(productSku);
    return product;
  }

  @Get('products/:cat')
  async getProductsByCategory(@Param('cat') productsCategory: string) {
    const products = await this.catalogueService.getProductsByCategory(
      productsCategory,
    );
    return products;
  }
  @Get('/categories')
  async getCategories() {
    const categories = await this.catalogueService.getCategories();
    return categories;
  }
}
