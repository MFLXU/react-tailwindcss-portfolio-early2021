import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
function Projects() {
  return (
    <section id="projects">
      <div className="container max-w-[1000px] mx-auto">
        <div className="">
          <h2 className="section__title">Projects</h2>
          <div className="grid gap-4 ">
            {/* Card */}
            <div className="card p-4 md:p-8 grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="rounded-md overflow-hidden">
                <img src={thumbnail} alt="" />
              </div>
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <h3 className="text-4xl mb-2 text-indigo-600 font-bold">
                    Project Name
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis iusto magnam fugiat obcaecati rerum veritatis
                    quas, nam ipsum. Veniam suscipit dolores ducimus pariatur
                    aut. Rem officia assumenda necessitatibus totam molestias.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    className="py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                  <a
                    className="py-2 rounded-md bg-zinc-700 hover:bg-zinc-900 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="card p-4 md:p-8 grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="rounded-md overflow-hidden">
                <img src={thumbnail} alt="" />
              </div>
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <h3 className="text-4xl mb-2 text-indigo-600 font-bold">
                    Project Name
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis iusto magnam fugiat obcaecati rerum veritatis
                    quas, nam ipsum. Veniam suscipit dolores ducimus pariatur
                    aut. Rem officia assumenda necessitatibus totam molestias.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    className="py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                  <a
                    className="py-2 rounded-md bg-zinc-700 hover:bg-zinc-900 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="card p-4 md:p-8 grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="rounded-md overflow-hidden">
                <img src={thumbnail} alt="" />
              </div>
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <h3 className="text-4xl mb-2 text-indigo-600 font-bold">
                    Project Name
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis iusto magnam fugiat obcaecati rerum veritatis
                    quas, nam ipsum. Veniam suscipit dolores ducimus pariatur
                    aut. Rem officia assumenda necessitatibus totam molestias.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    className="py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                  <a
                    className="py-2 rounded-md bg-zinc-700 hover:bg-zinc-900 duration-300 text-center text-white"
                    href=""
                  >
                    <i class="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
