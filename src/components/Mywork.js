import React, { useState } from "react";

import TestImg1 from "../imgs/testimg1.jpg";
import MariaRosa from "../imgs/mariaRosa.png";
import MadGlad from "../imgs/madGlad.png";
import LolMix from "../imgs/lolMix.png";
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
      "The skills i used during this project consisted of: HTML, CSS, JavaScript",
    link: "http://pilateskolding.dk/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Maria Rosa",
    description:
      "I have created a website that not only attracts hungry customers but also provides an intuitive and seamless user experience that is sure to satisfy.",
    image: MariaRosa,
    description2: "The skills i used during this project consisted of: React",
    link: "https://www.mariarosa.dk/",
    tags: ["React"],
  },
  {
    id: 3,
    title: "Madglad",
    description:
      "I have created a mobile application that connects influencers and restaurants together to showcase their food and provides inspiration to users in a user-friendly way.",
    image: MadGlad,
    description2:
      "The skills i used during this project consisted of: React, Remix, MongoDB. \n\n Some interesting things i learned from the project: API handling and CRUD based operations",
    link: "https://madglad.vercel.app/services/login",
    tags: ["React", "Remix", "MongoDB"],
  },
  {
    id: 4,
    title: "LolMatch",
    description:
      "I have created a website that provides a fun way to create League of legends team comps and share them with others",
    image: LolMix,
    description2:
      "The skills i used during this project consisted of: React, Remix, MongoDB. \n\n One interesting thing i want to take from this project was being able to learn how to drag and drop elements.",
    link: "https://lol-match-five.vercel.app/comps",
    tags: ["React", "Remix", "MongoDB"],
  },
];

export default function Mywork() {
  const [show, setShow] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useState(() => {
    setResults(myWorkArr);
  }, []);

  let dotArray = [];

  // show view button on each card
  const handleShow = (index) => {
    setShow((show) => {
      return show === index ? null : index;
    });
  };

  // next arrow key
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % results.length);
  };

  // prev arrow key
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? results.length - 3 : prevIndex - 3
    );
  };

  // show number of dots in pages
  const showDots = () => {
    for (let i = 0; i < results.length; i++) {
      if (i % 3 === 0) {
        dotArray.push(i);
      }
    }
  };
  showDots();

  // show filtered search results
  const search = (query) => {
    const filteredData = myWorkArr.filter((item) => {
      const filteredItems = item.tags.filter((subItem) =>
        subItem.toLowerCase().includes(query.toLowerCase())
      );
      return filteredItems.length > 0;
    });

    setResults(filteredData);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    search(value);
  };

  return (
    <section
      className="flex flex-col items-center my-[5vh] w-[1200px] m-auto max-lg:w-4/5"
      id="mywork"
    >
      <h2 className="Inter-Bold">My Work</h2>
      <div className="w-full flex justify-center mt-[2vh]">
        <input 
          type="text"
          placeholder="Search for coding languages..."
          value={query}
          onChange={handleInputChange}
          className="border-2 w-4/5 Inter-Med p-2 rounded-xl"
        />
      </div>
      <div
        className="mt-[2vh] transition-all duration-250 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={(event) => {
          if (event.propertyName === "transform") {
            event.target.style.transform = `translateX(-${currentIndex * 0}%)`;
          }
        }}
      >
        {results.slice(currentIndex, currentIndex + 3).map((wa) => {
          return (
            <div
              className="w-full flex justify-center bg-1 m-6 py-6 px-20 rounded-xl max-lg:flex-col max-lg:items-center max-lg:p-4 max-lg:mx-0"
              key={wa.id}
            >
              <h3 className="w-1/3 Inter-SemiBold max-lg:w-full">
                {wa.title}
              </h3>
              <div className="w-1/3 flex flex-col justify-between items-start p-2 max-lg:w-full max-lg:p-0">
                {show === wa.id ? (
                  <>
                    <p className="whitespace-pre-line Inter-Reg">{wa.description2} </p>
                    <button
                      className="mt-4 px-4 py-1 bg-4 text-white Inter-Reg rounded-lg hoverLink-2"
                      onClick={() => handleShow(true)}
                    >
                      <a href={wa.link} target="_blank" rel="noreferrer">
                        Go To Project
                      </a>
                    </button>
                  </>
                ) : (
                  <>
                    <p className="Inter-Reg">{wa.description}</p>
                    <button
                      className="mt-4 px-4 py-1 bg-4 text-white Inter-Reg rounded-lg hoverLink-2"
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
                className="w-4 h-4 border-2 border-gray-600 rounded-full m-1 cursor-pointer"
                style={{
                  background: i === currentIndex ? "rgb(75 85 99)" : "",
                }}
                onClick={() => {
                  setCurrentIndex(i);
                }}
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
