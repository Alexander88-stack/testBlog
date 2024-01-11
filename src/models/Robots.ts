import { Schema, model, models } from "mongoose";

const RobotSchema = new Schema({
  name: String,
  age: Number,
});

export default models.Robot || model("Robot", RobotSchema);
