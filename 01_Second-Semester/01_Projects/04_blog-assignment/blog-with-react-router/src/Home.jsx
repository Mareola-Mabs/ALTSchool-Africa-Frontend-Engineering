import posts from "./posts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Home Page
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="container">
      <h1 className="page-title">Blog</h1>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link className="read-more" to={`/posts/${post.id}`}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
