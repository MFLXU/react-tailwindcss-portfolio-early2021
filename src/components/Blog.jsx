import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
function Blog() {
  return (
    <section id="blog">
      <div className="container max-w-[1000px] mx-auto">
        <div>
          <h2 className="section__title">Blog</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {/* blog */}
            <div className="card p-0 flex flex-col gap-2 hover:scale-105 duration-300">
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div className="w-full p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-indigo-600 bg-1">
                  Blog Title
                </h3>
                <a
                  className="mt-4 py-2 w-full text-white bg-indigo-600 text-center rounded-md"
                  href="/"
                >
                  Read
                </a>
              </div>
            </div>
            {/* blog */}
            <div className="card p-0 flex flex-col gap-2 hover:scale-105 duration-300">
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div className="w-full p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-indigo-600 bg-1">
                  Blog Title
                </h3>
                <a
                  className="mt-4 py-2 w-full text-white bg-indigo-600 text-center rounded-md"
                  href="/"
                >
                  Read
                </a>
              </div>
            </div>
            {/* blog */}
            <div className="card p-0 flex flex-col gap-2 hover:scale-105 duration-300">
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div className="w-full p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-indigo-600 bg-1">
                  Blog Title
                </h3>
                <a
                  className="mt-4 py-2 w-full text-white bg-indigo-600 text-center rounded-md"
                  href="/"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
          <p className="text-xl text-center py-4 text-white mt-4 rounded-md px-4 bg-indigo-600">Read More on my Hashnode Profile</p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
