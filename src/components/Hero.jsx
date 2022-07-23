import React from "react";
import heroImg from "../assets/hero-img.png";
function Hero() {
  return (
    <section className="w-full h-fit mt-16 bg-slate-100 dark:bg-zinc-900">
      <div className="container max-w-[1000px] mx-auto h-full  md:px-0">
        <div className="h-full grid md:grid-cols-2 gap-4">
          <div className="h-[100%] flex justify-center flex-col gap-4">
            <p className="text-xl">Hello There, I'm</p>
            <h1 className="font-extrabold text-6xl text-indigo-600">
              Louaye Kazar
            </h1>
            <p className="text-xl">
              I'm a Computer Science Student, Self-thought Web Developer & UI/UX
              Designer
            </p>
            <div className="w-fit grid grid-cols-5 gap-4">
              <a
                className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-105 duration-300"
                href=""
              >
                <i class="fa-brands fa-github p-2"></i>
              </a>
              <a
                className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-105 duration-300"
                href=""
              >
                <i class="fa-brands fa-linkedin-in p-2"></i>
              </a> 
              <a
                className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-105 duration-300"
                href=""
              >
                <i class="fa-brands fa-twitter p-2"></i>
              </a> 
              <a
                className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-105 duration-300"
                href=""
              >
                <i class="fa-brands fa-hashnode p-2"></i>
              </a>
              

              <a
                className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-105 duration-300"
                href=""
              >
                <i class="fa-brands fa-dribbble p-2"></i>
              </a>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
