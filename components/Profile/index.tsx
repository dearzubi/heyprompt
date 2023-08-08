import { ProfileProps } from "./types"
import PromptCard from "@components/PromptCard"

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-16 prompt_layout">
      {
        data.map((prompt) => (
          <PromptCard 
            key={prompt._id.toString()}
            prompt={prompt}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}
          />
        ))
      }
    </div>
    </section>
  )
}

export default Profile
