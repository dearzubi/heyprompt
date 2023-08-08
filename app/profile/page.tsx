'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { PopulatedPrompt } from "@models/prompt/types";
import { set } from "mongoose";

function MyProfile() {

  const router = useRouter()
  const { data: session } = useSession()
  const [prompts, setPrompts] = useState<PopulatedPrompt[]>();

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch(`/api/users/
      ${session?.user.id}/prompts`);
      const data = (await res.json()) as PopulatedPrompt[];
      console.log(data);
      setPrompts(data);
    }
    if(session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = (prompt: PopulatedPrompt) => {
    router.push(`update-prompt?id=${prompt._id}`);
  }
  const handleDelete = async (prompt: PopulatedPrompt) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?');
    if(!hasConfirmed) return;
    try {
      await fetch(`/api/prompt/${prompt._id}`, {
        method: 'DELETE',
      });
      const filterdPrompts = prompts?.filter((p) => p._id !== prompt._id);
      setPrompts(filterdPrompts);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <Profile 
      name="My"
      desc="Welcome to your profile page!"
      data={prompts || []}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile