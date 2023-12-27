import { useState } from "react";
import { login } from "../services/users";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    setLoading(true);

    login({ username, password })
      .then((response: any) => {
        if (response) {
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            navigate("/users");
          }, 1500);
        }
      })
      .catch((error) => {
        setLoading(false);
        const message = error.response.data;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
      });
  };

  return (
    <>
      <body className=" bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Login
            </span>
            <form className="mb-4" action="/" method="post">
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Username
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                onClick={handleLogin}
              >
                {loading ? (
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <div
                      className="spinner-border spinner-border-sm text-white"
                      role="status"
                    ></div>
                    <div>Loading . . .</div>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <a className="text-blue-700 text-center text-sm" href="/login">
              Forgot password?
            </a>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
