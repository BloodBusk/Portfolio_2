import React, { useState } from "react";

import TestImg1 from "../imgs/testimg1.jpg";
import MariaRosa from "../imgs/mariaRosa.png"
import MadGlad from "../imgs/madGlad.png"
import LolMix from "../imgs/lolMix.png"
import ArrowLeft from "../imgs/left-arrow.png";
import ArrowRight from "../imgs/right-arrow.png";

const myWorkArr = [
  {
    id: 1,
    title: "Pilates",
    description:
      "I have created a website that not only showcases the benefits of Pilates but also provides an interactive and user-friendly platform for practitioners to access a variety of Pilates classes and resources.",
    image: TestImg1,
    description2:
      "The skills i used during this project consisted of: UI/UX Design, HTML, CSS, JavaScript",
    link: "http://pilateskolding.dk/",
  },
  {
    id: 2,
    title: "Maria Rosa",
    description:
      "I have created a website that not only attracts hungry customers but also provides an intuitive and seamless user experience that is sure to satisfy.",
    image: MariaRosa,
    description2:
      "The skills i used during this project consisted of: UI/UX Design, React",
    link: "https://www.mariarosa.dk/",
  },
  {
    id: 3,
    title: "Madglad",
    description:
      "I have created a mobile application that connects influencers and restaurants together to showcase their food and provides inspiration to users in a user-friendly way.",
    image: MadGlad,
    description2:
      "The skills i used during this project consisted of: UI/UX Design, React, Remix, MongoDB. \n\n Some interesting things i learned from the project: API handling and CRUD based operations",
    link: "https://madglad.vercel.app/services/login",
  },
  {
    id: 4,
    title: "LolMatch",
    description:
      "I have created a website that provides a fun way to create League of legends team comps and share them with others",
    image: LolMix,
    description2:
      "The skills i used during this project consisted of: UI/UX Design, React, Remix, MongoDB. \n\n One interesting thing i want to take from this project was being able to learn how to drag and drop elements.",
    link: "https://lol-match-five.vercel.app/comps",
  },
];

export default function Mywork() {
  const [show, setShow] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  let dotArray = [];

  const handleShow = (index) => {
    setShow((show) => {
      return show === index ? null : index;
    });
  };

  const handleNext = () => {
    if (currentIndex < myWorkArr.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const showDots = () => {
    for (let i = 0; i < myWorkArr.length; i++) {
      if (i % 3 === 0) {
        dotArray.push(i);
      }
    }
  };
  showDots();

  return (
    <section
      className="flex flex-col items-center my-[5vh] w-[1200px] m-auto max-lg:w-4/5"
      id="mywork"
    >
      <h2 className="text-2xl">My Work</h2>
      <div className="mt-[2vh]">
        {myWorkArr.slice(currentIndex, currentIndex + 3).map((wa) => {
          return (
            <div
              className="w-full flex justify-center bg-1 m-6 py-6 px-20 rounded-xl max-lg:flex-col max-lg:items-center max-lg:p-4"
              key={wa.id}
            >
              <h3 className="w-1/3 text-xl font-bold max-lg:w-full">
                {wa.title}
              </h3>
              <div className="w-1/3 flex flex-col justify-between items-start p-2 max-lg:w-full max-lg:p-0">
                {show === wa.id ? (
                  <>
                    <p className="whitespace-pre-line">{wa.description2} </p>
                    <button
                      className="mt-4 px-4 py-1 bg-4 text-white rounded-lg hoverLink-2"
                      onClick={() => handleShow(true)}
                    >
                      <a href={wa.link} target="_blank" rel="noreferrer">
                        Go To Project
                      </a>
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
              <div className="w-1/3 m-auto max-lg:w-full mt-2">
                <img
                  src={wa.image}
                  alt="imagecontainer"
                  className="w-2/3 h-[200px] object-contain ml-auto max-lg:m-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex">
          {dotArray.map((i) => {
            return (
              <div
                key={i}
                className="w-4 h-4 border-2 border-gray-600 rounded-full m-1"
                style={{background: i===currentIndex ? "rgb(75 85 99)" : ""}}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="flex">
        {currentIndex > 0 && (
          <img
            src={ArrowLeft}
            alt="left arrow"
            className="w-10 h-10 border-2 border-black rounded-full cursor-pointer"
            onClick={handlePrev}
          />
        )}
        {currentIndex < myWorkArr.length - 3 && (
          <img
            src={ArrowRight}
            alt="right arrow"
            className="w-10 h-10 border-2 border-black rounded-full cursor-pointer"
            onClick={handleNext}
          />
        )}
      </div>
    </section>
  );
}
