import { IFormProps } from './types'
import Link from 'next/link'

const Form = ({
  type,
  prompt,
  setPrompt,
  submitting,
  handleSubmit
}: IFormProps) => {
  return (
    <section className="flex-start w-full max-w-full flex-col">
      <h1 className="head_text text-left">
        <span className='blue_gradient'>
          {type} Prompt
        </span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share your amazing AI prompt with the world!
      </p>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>
          <textarea
            className='form_textarea'
            value={prompt.prompt} 
            onChange={(e) => setPrompt({...prompt, prompt: e.target.value})}
            placeholder='Write your prompt here...'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            className='form_input'
            value={prompt.tag} 
            onChange={(e) => setPrompt({...prompt, tag: e.target.value})}
            placeholder='#tag'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500'>
            Cancel
          </Link>
          <button
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            type='submit' 
            disabled={submitting}>
              {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
