import Link from "next/link";
import PromptCard from "../PromptCard/PromptCard";
import "./profile.css";
export function Profile({ name, data, description, handleEdit, handleDelete }) {
  return (
    <section className="profile-page">
      <h1 className="profile-title">
        <span className="blue-gradient">{name} Profile</span>
      </h1>
      <p className="profile-description">{description}</p>
      <div className="profile-posts">
        {data.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            handleEdit={(id) => {
              handleEdit && handleEdit(id);
            }}
            handleDelete={(id) => {
              handleDelete && handleDelete(id);
            }}
          />
        ))}
      </div>
    </section>
  );
}
