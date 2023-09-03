"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
}

export default function Question({ question }: { question: Question }) {
  return (
    <div
      className="rounded-lg w-full text-white
    "
    >
      <span className="flex w-full rounded-t-lg text-base items-center   text-gray-900 justify-between px-3 py-4 font-medium ">
        {question?.question}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
        explicabo hic odit rerum, eos totam delectus dignissimos molestiae
        voluptatum porro aspernatur. Quo qui quis beatae ab doloribus quibusdam
        commodi.
      </span>

      <div className="px-3 w-full py-4  border border-white rounded-b-lg flex flex-col gap-5">
        {question?.options.map((option, index) => (
          <div className="flex items-center px-3 w-full">
            <input
              id="default-radio-2"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4   border-gray-300"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              {option}
              Lorem ipsum dolor sit amet consectetur adipisicing distinctio,
              cumque blanditiis mollitia provident incidunt!
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
