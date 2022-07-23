import React from "react";

function Navbar() {
  return (
    <header className="w-full bg-slate-50 dark:bg-zinc-900 dark:shadow-zinc-600 dark:text-white  z-[100]  fixed top-0  shadow-sm">
      <div className="container max-w-[1000px] mx-auto">
        <nav className="flex justify-between items-center py-4 px-4 md:px-0">
          <a className="text-2xl" href="">
            Logo
          </a>
         
          {/* Desktop Navbar */}
          <div className="hidden justify-center gap-8 md:flex items-center">
            <a
              className="hover:text-indigo-600 hover:-translate-y-1 duration-300"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-indigo-600 hover:-translate-y-1 duration-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:text-indigo-600 hover:-translate-y-1 duration-300"
              href="#blog"
            >
              Blog
            </a>
            <a
              className="text-white bg-indigo-600 py-2 px-6 rounded-md hover:bg-indigo-700 duration-300"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
