import { Route, Routes, NavLink, Link, useParams, useNavigate } from "react-router-dom";
import posts from "./posts";


// Detail Page
function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <button onClick={() => navigate(-1)} style={{marginRight: "10px"}}>Go back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}


// Home Page
const Home = () => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link to={`/posts/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

// Error Page
const NotFound = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back home</Link>
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
