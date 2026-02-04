import { useEffect } from "react";
import { Link } from "react-router-dom";
// Error Page
const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  });
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="btn" to="/">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound