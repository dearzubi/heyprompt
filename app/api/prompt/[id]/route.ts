import { NextRequest } from "next/server";
import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
import { IUser } from "@models/user/types";

export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
  try {
    await connectToDatabase();
    const prompt = await Prompt.findById(params.id.trim()).populate<{creator: IUser}>("creator");
    if(!prompt) {
      return new Response(
        "Prompt not found",
        {status: 404}
      );
    }
    return new Response(
      JSON.stringify(prompt),
      {status: 200}
    );
  }catch(err) {
    console.log(err)
    return new Response(
      "Failed to get prompts",
      {status: 500}
    );
  }
}

export const PATCH = async (req: NextRequest, {params}: {params: {id: string}}) => {
  const {prompt, tag} = await req.json();
  try {
    await connectToDatabase();
    const existingPrompt = await Prompt.findById(params.id.trim());
    if(!existingPrompt) {
      return new Response(
        "Prompt not found",
        {status: 404}
      );
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(
      JSON.stringify(existingPrompt),
      {status: 200}
    );
  }catch(err) {
    console.log(err)
    return new Response(
      "Failed to update prompt",
      {status: 500}
    );
  }
}

export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {

  try {
    await connectToDatabase();
    await Prompt.findByIdAndRemove(params.id.trim());
    return new Response(
      "Prompt deleted",
      {status: 200}
    );
  }catch(err) {
    console.log(err)
    return new Response(
      "Failed to delete prompt",
      {status: 500}
    );
  }

}