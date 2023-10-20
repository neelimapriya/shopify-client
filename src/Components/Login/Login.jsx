import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setErrorText("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleSignInGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="pt-32 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <div className="max-w-3xl mx-auto min-h-fit pt-10  ">
        <div className=" flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">
              Login with your <span className="text-lime-700">Shopify</span>{" "}
              account!
            </h1>
          </div>
          <div className="card mt-5 flex-shrink-0 w-full  shadow-2xl bg-transparent">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl   font-semibold ">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered outline  hover:outline-sky-600
                  "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered  outline  hover:outline-sky-600"
                  required
                />

                <div>
                  <p className="text-xl mt-4">
                   
                    Do not have an account?
                    <Link className="text-blue-700 ml-2" to="/register">
                      
                      Please Register
                    </Link>
                  </p>
                </div>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div onClick={handleSignInGoogle} className=" cursor-pointer max-w-3xl mx-auto flex gap-3 justify-center">
            <FcGoogle className="text-3xl "></FcGoogle>
              <p className="hover:text-lime-700 text-blue-600  text-xl  items-center justify-center   text-center">
                
                 LogIn with Google?
              </p>
            </div>
            <br />

            <div>
              {errorText && (
                <p className="text-center text-xl text-red-600">{errorText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
