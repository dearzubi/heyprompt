import { NextRequest } from "next/server";
import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
import { IUser } from "@models/user/types";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate<{creator: IUser}>("creator");
    return new Response(
      JSON.stringify(prompts),
      {status: 200}
    );
  }catch(err) {
    return new Response(
      "Failed to get prompts",
      {status: 500}
    );
  }
}