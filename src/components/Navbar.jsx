import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <button className="btn btn-ghost text-xl">Home</button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/edit">Edit Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
