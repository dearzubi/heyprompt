import { PopulatedPrompt } from "@models/prompt/types";

export interface ProfileProps {
  name: string;
  desc: string;
  data: PopulatedPrompt[];
  handleEdit: (prompt: PopulatedPrompt) => void;
  handleDelete: (prompt: PopulatedPrompt) => void;
}