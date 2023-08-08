'use client';

import { useState, useEffect } from "react";
import { PopulatedPrompt } from "@models/prompt/types";
import PromptCardList from "./PromptCardList";

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState<PopulatedPrompt[]>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch('/api/prompt');
      const data = (await res.json()) as PopulatedPrompt[];
      setPrompts(data);
    }
    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          className="search_input peer"
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <PromptCardList 
        data={prompts || []}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed
