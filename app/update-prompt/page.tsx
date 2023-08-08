'use client'
import { FormEvent, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@components/Form'
import { PopulatedPrompt, Prompt } from '@models/prompt/types'

function EditPrompt() {

  const router = useRouter()
  const { data: session } = useSession()

  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false)
  const [prompt, setPrompt] = useState<Prompt>({
    prompt: '',
    tag: '',
  })

  useEffect(() => {
    const getPromptDetails = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = (await res.json());
      setPrompt(data);
    }
    if(promptId) getPromptDetails();
  }, [promptId])

  const updatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if(!promptId) return alert('Prompt ID not found');

    try {

      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
        }),
      });

      if(response.ok){
        router.push('/')
      }

    }catch(err) {
      console.log(err)
    }
    finally{
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Edit"
      prompt={prompt}
      setPrompt={setPrompt}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt
