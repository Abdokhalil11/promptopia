import "./form.css";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmitting,
  loading,
}) {
  const disable = {
    cursor: "not-allowed",
    opacity: 0.4,
  };
  return (
    <div className="form-input">
      <h1 className="form-heading">
        <span className="blue-gradient">{type} Prompt</span>
      </h1>
      <p className="form-description">
        {type} & Share an Amazing prompt with the world,and let's your
        Imagination run wild with any powered of AI
      </p>

      <form onSubmit={handleSubmitting} className="glassmorphism">
        <label>
          <span className="form-title-input">Your Prompt</span>
          <textarea
            placeholder="Typing A prompt Content"
            value={loading ? "Loading...." : post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form-input-textarea"
            required
    
          />
        </label>
        <label>
          <span className="form-title-input">
            Tags
            <span className="form-tags">
              (#product,#webDeveloping,#reading)
            </span>
          </span>
          <input
            type="text"
            placeholder="Typing A prompt Content"
            value={loading ? "Loading...." : post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
            className="form-input-tags"
            disabled={loading}
            required
          />
        </label>
        <div className="buttons">
          <input
            type="submit"
            value={submitting ? "Submitting...." : "Submit"}
            className="submit-button"
            disabled={submitting}
          />
        </div>
      </form>
    </div>
  );
}
