import { useParams, useNavigate } from "react-router-dom";
import posts from "./posts";
import { useEffect } from "react";

// Detail Page
function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <h2>Post Not Found</h2>
        <button className="btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  }

  useEffect(() => {
    document.title = `${post.title}`;
  });

  return (
    <div className="container">
      <article className="post-detail">
        <h1 className="post-detail-title">{post.title}</h1>
        <p className="post-content">{post.content}</p>

        <div className="button-group">
          <button className="btn secondary" onClick={() => navigate(-1)}>
            Go back
          </button>
          <button className="btn" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </article>
    </div>
  );
}

export default PostDetail