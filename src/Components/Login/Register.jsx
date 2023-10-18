import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { newUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Your password at least have 6 characters",
      });
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Your Password Should have at least one uppercase character",
      });
      return;
    } else if (!/[!@#$%^&*()_+]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Your Password Should have at least one special character",
      });
      return;
    }

    newUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then()
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          icon: "success",
          title: "Your account created successfully",
        });

          e.target.reset()
      })

      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <div className="max-w-3xl mx-auto min-h-fit pt-10">
        <div className=" ">
          <h1 className="text-5xl font-bold text-center">
            Create a Shopify account!
          </h1>

          <div className="card flex-shrink-0 w-full  shadow-2xl bg-transparent">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lime-600 text-white hover:bg-sky-600">
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className="text-center ">
                Alreday have an account ? 
                <Link className="text-blue-700 text-xl pl-3 font-semibold" to="/login">
                  Please Login
                </Link>
              </p>
            </div>

            {errorMessage && (
              <p className="text-red-600 text-2xl text-center pt-3 pb-5 ">
                Error: {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
