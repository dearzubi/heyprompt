import PromptCard from "@components/PromptCard";
import { PromptCardListProps } from "./types";

const PromptCardList = ({ 
  data, 
  handleTagClick 
}: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((prompt) => (
          <PromptCard 
            key={prompt._id.toString()}
            prompt={prompt}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

export default PromptCardList