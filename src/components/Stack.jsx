import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/reactjs.png";
import mango from "../assets/mango.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
function Stack() {
  return (
    <section>
      <div className="max-w-[1000px] mx-auto container">
        <div>
          <h2 className="section__title">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="hover:scale-105 card">
              <img src={html} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={css} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={sass} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={bootstrap} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={tailwind} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={reactImg} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={javascript} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={typescript} alt="" />
            </div>

            <div className="hover:scale-105 card">
              <img src={node} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={express} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={mango} alt="" />
            </div>
            <div className="hover:scale-105 card">
              <img src={git} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
