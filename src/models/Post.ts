import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

export default models.Post || model("Post", PostSchema);
