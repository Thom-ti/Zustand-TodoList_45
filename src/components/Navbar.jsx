import React from "react";

export default function Navbar() {
  return (
    <div className="flex">
      <div className="flex navbar-start bg-green-200 w-full text-2xl font-bold items-center">
        Navbar
      </div>
      <div className="flex navbar-end bg-green-200 w-full justify-end gap-4 px-4">
        <a className="btn btn-ghost bg-gray-200 my-2">Home</a>
        <a className="btn btn-ghost bg-gray-200 my-2">About</a>
        <a className="btn btn-ghost bg-gray-200 my-2">Login</a>
      </div>
    </div>
  );
}
