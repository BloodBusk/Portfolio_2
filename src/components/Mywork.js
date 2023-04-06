import React, { useState } from "react";

import TestImg1 from "../imgs/testimg1.jpg";

const myWorkArr = [
  {
    id: 1,
    title: "Pilates",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
    description2: "Some of the koding languages i used",
    link: "www.google.com",
  },
  {
    id: 2,
    title: "Maria Rosa",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
    description2: "Some of the koding languages i used",
    link: "www.google.com",
  },
  {
    id: 3,
    title: "Madglad",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
    description2: "Some of the koding languages i used",
    link: "www.google.com",
  },
];

export default function Mywork() {
  const [show, setShow] = useState(null);

  const handleShow = (index) => {
    setShow((show) => {
      return show === index ? null : index;
    });
  };

  return (
    <section className="flex flex-col items-center my-[5vh] w-[1200px] m-auto">
      <h2 className="text-2xl">My Work</h2>
      <div className="mt-[2vh]">
        {myWorkArr.map((wa) => {
          return (
            <div
              className="flex justify-center bg-1 m-6 py-6 px-20 rounded-xl"
              key={wa.id}
            >
              <h3 className="w-1/3 text-xl font-bold">{wa.title}</h3>
              <div className="w-1/3 flex flex-col justify-between items-start p-2">
                {show === wa.id ? (
                  <>
                    <p>{wa.description2} </p>
                    <button
                      className="mt-4 px-4 py-1 bg-4 text-white rounded-lg hoverLink-2"
                      onClick={() => handleShow(true)}
                    >
                      Go To Project
                    </button>
                  </>
                ) : (
                  <>
                    <p>{wa.description}</p>
                    <button
                      className="mt-4 px-4 py-1 bg-4 text-white rounded-lg hoverLink-2"
                      onClick={() => handleShow(wa.id)}
                    >
                      View
                    </button>
                  </>
                )}
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
