import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { CategorySchema } from './categories.model';
import { SkuSchema } from './sku.model';

export const ProductSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  instock: { type: Number, required: true },
  categories: { type: [String], required: true },
});

export class Product extends mongoose.Document {
  @ApiProperty()
  sku: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  instock: number;
  @ApiProperty()
  categories: [];
}
