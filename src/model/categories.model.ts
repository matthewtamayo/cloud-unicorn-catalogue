import * as mongoose from 'mongoose';
//im not using this schema yet
export const CategorySchema = new mongoose.Schema({
  categories: { type: [String], required: true },
});
