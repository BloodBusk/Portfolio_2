import React from "react";

import HeroImg from "../imgs/CV_image_effekt_01.png";
import Pdf from "../documents/CVpdf_2023.pdf";

export default function Hero() {
  return (
    <section className="w-[1200px] m-auto py-8 flex max-lg:w-4/5 max-lg:flex-col" id="hero">
      <div className="w-1/2 max-lg:w-full">
        <img src={HeroImg} alt="hero" className="w-2/3 m-auto" />
      </div>
      <div className="w-1/2 flex flex-col justify-center max-lg:w-full ">
        <h1 className="pb-1 Inter-Bold">Thomas Busk</h1>
        <h2 className="pb-8 Inter-SemiBold">Webdeveloper</h2>
        <p className="pb-16 Inter-Med">
          "Im a frontend and backend webdeveloper with a passion for creating
          elegant and user-friendly web applications that provide exceptional
          user experience and solve real-world problems."
        </p>
        <div>
          <a
            href={Pdf} target="_blanc" rel="norefferer"
            className="mr-4 py-2 px-4 bg-4 text-white Inter-Med rounded-lg hoverLink"
          >
            Resume
          </a>
          <a
            href="mailto:thomashbusk@gmail.com"
            className="mr-4 py-2 px-4 color-4 Inter-Med rounded-lg border-2 shadow-md hoverChangeText hoverLink"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
