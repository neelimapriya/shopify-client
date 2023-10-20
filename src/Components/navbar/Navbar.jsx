import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/pngegg.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const {User,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut().then().catch();
  }

    const navLinks = (
        <>
          <li>
            <NavLink className="hover:bg-lime-500" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-lime-500" to="/addProduct">
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-lime-500" to='/cart'>
            My Cart 
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-lime-500" to="/login">
              Login
            </NavLink>
          </li>
        </>
      );

  return (
    <div className="top-0 fixed z-10 w-full">
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
        <div className="navbar-end space-x-3 ">
        {User ? (
          <>
            <label
              tabIndex={0}
              className="btn btn-outline btn-accent btn-circle avatar"
            >
              <div className=" w-10 rounded-full  ">
                <img src={User.photoURL} />
              </div>
            </label>
            <p className="text-black font-semibold ">{User.displayName}</p> 
            
            <button
              onClick={handleLogout}
              className="btn w-32 bg-gray-100 text-black hover:bg-sky-600"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn w-32 bg-sky-600 text-white hover:bg-lime-600">
              LogIn
            </button>
          </Link>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
