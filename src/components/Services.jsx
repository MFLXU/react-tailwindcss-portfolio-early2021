import React from "react";

function Services() {
  return (
    <section>
      <div className="max-w-[1000px] mx-auto container">
        <h2 className="section__title">My Services</h2>
        <div className="w-full grid md:grid-cols-3 gap-4">
          {/* Service */}
          <div className=" cursor-default showUp card text-indigo-600 dark:text-white hover:text-white hover:bg-indigo-600 py-6  flex gap-2 justify-center items-center">
            <i class="fa-solid fa-code text-2xl mr-2"></i>
            <p className="text-2xl">Web Development</p>
          </div>
          {/* Service */}
          <div className=" cursor-default showUp card text-indigo-600 dark:text-white hover:text-white hover:bg-indigo-600 py-6 flex gap-2 justify-center items-center">
            <i class="fa-solid fa-mobile-screen text-2xl mr-2"></i>
            <p className="text-2xl">Mobile Development</p>
          </div>
          {/* Service */}
          <div className=" cursor-default showUp card text-indigo-600 dark:text-white hover:text-white hover:bg-indigo-600 py-6 flex gap-2 justify-center items-center">
            <i class="fa-solid fa-pen-ruler text-2xl mr-2"></i>
            <p className="text-2xl">UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
