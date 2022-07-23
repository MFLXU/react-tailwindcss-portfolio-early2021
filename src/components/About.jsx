import React from "react";
import aboutImg from "../assets/about-img.png";
function About() {
  return (
    <section id="about">
      <div className="container max-w-[1000px] mx-auto ">
        <h2 className="section__title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sit
            perspiciatis veritatis dignissimos culpa commodi at iusto excepturi
            officia ipsum? Incidunt quia aut amet accusamus ad ut, labore
            sapiente molestias asperiores ipsam? Iste, fugiat minima pariatur
            deleniti nemo modi fuga consequuntur at aliquam. Eum, saepe alias
            voluptas placeat consectetur mollitia. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aut sit perspiciatis veritatis
            dignissimos culpa commodi at iusto excepturi officia ipsum? Incidunt
            quia aut amet accusamus ad ut, labore sapiente molestias asperiores
            ipsam? Iste, fugiat minima pariatur deleniti nemo modi fuga
            consequuntur at aliquam. Eum, saepe alias voluptas placeat
            consectetur mollitia.
            dignissimos culpa commodi at iusto excepturi officia ipsum? Incidunt
            quia aut amet accusamus ad ut, labore sapiente molestias asperiores
            ipsam? Iste, fugiat minima pariatur deleniti nemo modi fuga
            consequuntur at aliquam. Eum, saepe alias voluptas placeat
            consectetur mollitia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
