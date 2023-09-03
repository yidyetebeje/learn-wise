"use client";
import React from "react";
import { useState } from "react";
import Question from "./Question";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const question = [
    {
      id: 1,
      question:
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobisexplicabo hic odit rerum, eos totam delectus dignissimos molestiae",
      options: [
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
      ],
      asnwer: 1,
    },
    {
      id: 2,
      question:
        "FUCK U loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobisexplicabo hic odit rerum, eos totam delectus dignissimos molestiae",
      options: [
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
      ],
      answer: 3,
    },
    {
      id: 3,
      question:
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobisexplicabo hic odit rerum, eos totam delectus dignissimos molestiae",
      options: [
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
        "loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis",
      ],
      answer: 2,
    },
  ];

  const prev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(
      currentIndex === 0 ? question.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    if (currentIndex === question.length - 1) {
      return;
    }
    setCurrentIndex(
      currentIndex === question.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="flex w-full h-fit lg:w-full gap-1 relative border border-gray-500 px-5 py-5 rounded-lg shadow-right-bottom flex-col">
      <div className="w-full relative rounded-lg ">
        <div className="rounded-md flex gap-2 pr-5">
          <h1 className="items-center flex">
            Q<span>{currentIndex + 1}</span>.
          </h1>
          <Question question={question[currentIndex]} />
        </div>
      </div>
      <div className="flex justify-between py-3">
        {" "}
        <button
          onClick={prev}
          className="border border-black px-5 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="border border-black px-5 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Slider;
