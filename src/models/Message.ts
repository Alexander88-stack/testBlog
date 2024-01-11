import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

export default models.Message || model("Message", MessageSchema);
