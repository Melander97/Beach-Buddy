import React, { useEffect, useState } from "react";
import "./login.scss";
import { Navigate, Link } from "react-router-dom";
import authService from "../../services/authService";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [isClicked, setIsClicked] = useState(false)
  const [data, setData] = useState({});


  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setDisable(false);
    }
  }, [email, password]);

  useEffect(() => {
    if(data.success) {
      setIsClicked(true);
    }
  }, [data])

  const submit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
   let res = await authService.loginFunction(loginData);
    setData(res)

	}
  return (
    <div className="login--bg grid place-items-center w-full shadow-lg h-5/6 ">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6 w-80 space-y-1 w-64 pt-6 " action="#"  >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center box-border">
            Sign in
          </h3>
          {data && 
          <p style={data.success ? {color: 'green'} :{color: 'red'}}>{data.message}</p>
          }
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300 py-1"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
              </div>

              <div className="text-sm ml-3">
                
              </div>
            </div>
          </div>
          <button
            disabled={disable}
            type="submit"
            onClick={submit}
            className="w-full text-blackS bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 ">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-black hover:underline dark:text-gray-700"
            >
              Create account
            </Link>
          </div>
        </form>
        {isClicked && 
        <Navigate to="/profile"/>
        }
      </div>
    </div>
  );
}

export default LoginForm;
