import { Route, Routes, NavLink, Link, useParams, useNavigate } from "react-router-dom";
import posts from "./posts";
import "./App.css"


// Home Page
const Home = () => {
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


// Detail Page
function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <h2>Post Not Found</h2>
        <button className="btn" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

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


// Error Page
const NotFound = () => {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="btn" to="/">Go back home</Link>
    </div>
  );
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetail />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
