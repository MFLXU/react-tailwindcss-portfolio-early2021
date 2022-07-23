import React from "react";

function Footer() {
  return (
    <section className="bg-indigo-600">
      <div className="max-w-[1000px] mx-auto container">
        <div className="w-fit mx-auto">
          <div className="w-fit grid grid-cols-5 gap-4">
            <a
              className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-110 duration-300"
              href=""
            >
              <i class="fa-brands fa-github p-2"></i>
            </a>
            <a
              className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-110 duration-300"
              href=""
            >
              <i class="fa-brands fa-linkedin-in p-2"></i>
            </a>
            <a
              className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-110 duration-300"
              href=""
            >
              <i class="fa-brands fa-twitter p-2"></i>
            </a>
            <a
              className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-110 duration-300"
              href=""
            >
              <i class="fa-brands fa-hashnode p-2"></i>
            </a>

            <a
              className=" flex justify-center items-center text-2xl bg-indigo-600 text-white rounded-full hover:scale-110 duration-300"
              href=""
            >
              <i class="fa-brands fa-dribbble p-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
