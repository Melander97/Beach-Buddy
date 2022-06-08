import { NavLink } from "react-router-dom";
import "./not-found.scss";

const NotFound = () => {
  return (
    <section className="not-found flex items-center p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="w-max m-5 bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md shadow-cla-blue py-2 rounded-lg mb-0 mt-4 p-10"
          >
            Back to home
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
