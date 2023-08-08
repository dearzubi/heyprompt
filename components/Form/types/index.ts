import { Prompt } from "@models/prompt/types";
import { Dispatch, SetStateAction, FormEvent } from "react";

export interface IFormProps {
  type: string,
  prompt: Prompt,
  setPrompt: Dispatch<SetStateAction<Prompt>>,
  submitting: boolean,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}