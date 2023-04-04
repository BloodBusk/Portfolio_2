import React from "react";

import TestImg1 from "../imgs/testimg1.jpg";

const myWorkArr = [
  {
    title: "Pilates",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
  },
  {
    title: "Maria Rosa",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
  },
  {
    title: "Madglad",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
  },
];

export default function Mywork() {
  return (
    <section className="flex flex-col items-center my-[5vh] w-[1200px] m-auto">
      <h2 className="text-2xl">My Work</h2>
      <div className="mt-[2vh]">
        {myWorkArr.map((wa) => {
          return (
            <div className="flex justify-center bg-1 m-6 py-6 px-20 rounded-xl">
              <h3 className="w-1/3 text-xl font-bold">{wa.title}</h3>
              <div className="w-1/3 flex flex-col justify-between items-start p-2">
                <p>{wa.description}</p>
                <button className="mt-4 px-4 py-1 bg-4 text-white rounded-lg hoverLink-2">
                  View
                </button>
              </div>
              <div className="w-1/3 m-auto">
                <img
                  src={wa.image}
                  alt="imagecontainer"
                  className="w-2/3 ml-auto rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
