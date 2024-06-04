import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/tasks">
          <a className="text-white">Todo App</a>
        </Link>
        <div>
          <Link href="/tasks">
            <a className="text-white mr-4">Tasks</a>
          </Link>
          <Link href="/create-task">
            <a className="text-white">Create Task</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
