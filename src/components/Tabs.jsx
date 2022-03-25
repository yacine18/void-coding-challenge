import React from "react";

const Tabs = () => {
  return (
    <>
      <div className="sm:hidden">
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Spécialistes</option>
        </select>
      </div>
      <ul
        className="hidden mt-8 text-sm font-medium text-center w-40 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
        style={{
          backgroundColor: "#7fa4c6",
          borderColor: "#7fa4c6",
          marginLeft: "28%",
        }}
      >
        <li className="w-32 text-white p-4">
          <a
            href="/"
            style={{
              fontFamily: "Source Sans Pro",
              fontSize: "1.4rem",
            }}
            className="inline-block w-32 active"
            aria-current="page"
          >
            Spécialistes
          </a>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
