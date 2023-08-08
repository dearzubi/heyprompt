import { PopulatedPrompt } from "@models/prompt/types";

export interface PromptCardListProps {
  data: PopulatedPrompt[],
  handleTagClick: (tag: string) => void 
}