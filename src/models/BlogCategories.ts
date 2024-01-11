import { Schema, model, models } from "mongoose";

const BlogCategorySchema = new Schema({
  name: String,
  description: String,
  slug: String,
});

export default models.BlogCategory || model("BlogCategory", BlogCategorySchema);
