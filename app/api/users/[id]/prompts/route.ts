import { NextRequest } from "next/server";
import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
import { IUser } from "@models/user/types";

export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({
      creator: params.id.trim()
    }).populate<{creator: IUser}>("creator");
    return new Response(
      JSON.stringify(prompts),
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