import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Page Not Found: 404
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
