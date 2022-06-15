import * as mongoose from 'mongoose';

export const SkuSchema = new mongoose.Schema({
  sku: { type: String, required: true },
});
