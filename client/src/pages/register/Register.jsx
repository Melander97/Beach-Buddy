import React, { useState, useEffect } from "react";
import authService from "../../services/authService";
import { Navigate, Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (data.success) {
      setIsClicked(true);
    }
  }, [data]);

  const submit = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
      confPassword: confPassword,
    };

    let test = await authService.registerFunction(userData);
    setData(test);
  };

  return (
    <div className="register--bg grid place-items-center h-5/6">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-2 w-60" onSubmit={submit}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            Skapa ett konto
          </h3>
          {data && (
            <p className={data.success ? "text-green-400" : "text-red-400"}>
              {data.message}
            </p>
          )}

          <div>
            <label
              htmlFor="text"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Ditt användarnamn
            </label>
            <input
              type="text"
              name="Username"
              id="Username"
              className="bg-gray-50 h-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Användarnamn"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Din email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 h-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="namn@email.com"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Ditt lösenord
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 h-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Upprepa lösenord
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 h-10 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-6 text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-black font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Skicka in
          </button>
        </form>
        {isClicked && <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default Register;
