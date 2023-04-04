import React from "react";

import HeroImg from "../imgs/CV_image_effekt_01.png";

export default function Hero() {
  return (
    <section className="w-[1200px] m-auto py-8 flex">
      <div className="w-1/2">
        <img src={HeroImg} alt="hero" className="w-2/3 m-auto" />
      </div>
      <div className="w-1/2 flex flex-col justify-center ">
        <h1 className="pb-2 text-4xl font-bold">Thomas Busk</h1>
        <h2 className="pb-8 text-2xl font-bold">Webdeveloper</h2>
        <p className="pb-16 text-xl">
          "Im a frontend and backend webdeveloper with a passion for creating
          elegant and user-friendly web applications that provide exceptional
          user experience and solve real-world problems."
        </p>
        <div>
          <a
            href="google.com"
            className="mr-4 py-2 px-4 bg-4 text-white text-xl font-bold rounded-lg hoverLink"
          >
            Resume
          </a>
          <a
            href="google.com"
            className="mr-4 py-2 px-4 color-4 text-xl font-bold rounded-lg border-2 shadow-md hoverChangeText hoverLink"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
