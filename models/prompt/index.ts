import {Model, Schema, model, models} from "mongoose";
import { IPrompt } from "./types";

const PromptSchema = new Schema<IPrompt>({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"]
  },
  tag: {
    type: String,
    required: [true, "Tag is required"]
  }
});

const Prompt = (models.Prompt as Model<IPrompt>) || model<IPrompt>("Prompt", PromptSchema);
export default Prompt;