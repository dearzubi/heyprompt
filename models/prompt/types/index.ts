import { IUser } from "@models/user/types";
import {Types} from "mongoose";

export interface IPrompt {
  _id: Types.ObjectId,
  creator: Types.ObjectId,
  prompt: string,
  tag: string,
}

export type Prompt = Omit<IPrompt, "creator" | "_id">
export type PopulatedPrompt = Omit<IPrompt, "creator"> & { creator: IUser };