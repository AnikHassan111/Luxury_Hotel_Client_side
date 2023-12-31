import { useContext } from "react";
import { ContextApi } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { handleUserLogin: handleUserrLogin } = useContext(ContextApi);

  const loaction = useLocation();
  const navgate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let form = new FormData(e.currentTarget);
    let email = form.get("email");
    let password = form.get("password");

    e.target.email.value = "";
    e.target.password.value = "";

    handleUserrLogin(email, password)
      .then(() => {
        toast.success("User Login SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
        axios
          .post(
            "https://b8a11-server-side-anik-hassan111.vercel.app/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {});
        navgate(loaction?.state ? loaction.state : "/");
      })
      .catch(() => {
        toast.error("Invalid User", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <div className="hero max-w-7xl mx-auto mt-5">
          <form onSubmit={handleLogin} className="md:w-2/4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered w-full border-blue-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered border-blue-500"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Login</button>
            </div>
            <p className="mt-5">
              You Dont have an account?{" "}
              <Link to={"/register"} className="text-blue-500 ">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
