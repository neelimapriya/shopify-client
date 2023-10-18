import { NavLink } from "react-router-dom";
import logo from "../../assets/pngegg.png"

const Navbar = () => {

    const navLinks = (
        <>
          <li>
            <NavLink className="hover:bg-red-700" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-red-700" to="/add">
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-red-700" to="/cart">
            My Cart
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-red-700" to="/login">
              Login
            </NavLink>
          </li>
        </>
      );

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-400 from-10% via-sky-600 via-30% to-emerald-500 to-90%">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navLinks}
            </ul>
          </div>
          <img className="w-32 md:ml-10 " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
