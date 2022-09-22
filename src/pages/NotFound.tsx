import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div>Page Not Found</div>

      <div>
        <Link to='/join'>GO BACK</Link>
      </div>
    </div>
  );
};

export default NotFound;
