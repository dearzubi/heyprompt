import { PopulatedPrompt } from "@models/prompt/types";

export interface PromptCardProps {
  prompt: PopulatedPrompt,
  handleTagClick?: (tag: string) => void,
  handleEdit?: (prompt: PopulatedPrompt) => void,
  handleDelete?: (prompt: PopulatedPrompt) => void,
}