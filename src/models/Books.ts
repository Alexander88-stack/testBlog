import { Schema, model, models } from "mongoose";

const BookSchema = new Schema({
  title: String,
  description: String,
  autor: String,
  price: Number,
  image: String,
});

export default models.Book || model("Book", BookSchema);
