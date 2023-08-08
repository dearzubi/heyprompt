'use client'
import { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import { Prompt } from '@models/prompt/types'

function CreatePrompt() {

  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)
  const [prompt, setPrompt] = useState<Prompt>({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {

      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: prompt.prompt,
          userId: session?.user.id,
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
      type="Create"
      prompt={prompt}
      setPrompt={setPrompt}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
