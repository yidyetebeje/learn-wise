"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This note summarizing feature is a game-changer! It has saved me countless hours by condensing my study material into concise summaries. Highly recommended for students! The quiz generating AI on this website is amazing. It creates challenging practice quizzes that have greatly helped me in understanding and retaining the study material. ",
      author: "Yididiya Tebeje",
      image: "/yid_.jpeg",
      description: "Student, Client",
    },
    {
      id: 2,
      quote:
        "The quiz generating AI on this website is amazing. It creates challenging practice quizzes that have greatly helped me in understanding and retaining the study material. A must-have tool for exam preparation! This note summarizing feature is a game-changer! It has saved me countless hours by condensing my study material into concise summaries. Highly recommended for students!",
      author: "Metsehafe Eyasu",
      image: "/metss.jpeg",
      description: "Founder, Client",
    },
    {
      id: 3,
      quote:
        "I can't imagine studying without the chatbot assistance provided by this website. The chatbot is incredibly intelligent and provides personalized study recommendations based on my uploaded notes. It's like having a virtual study buddy! The quiz generating AI on this website is amazing. It creates challenging practice quizzes that have greatly helped me in understanding and retaining the study material. ",
      author: "Yoseph Shimels",
      image: "/joss.jpeg",
      description: "Student, Client",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="md:flex md:w-[1030px] mx-auto space-y-5 space-x-6">
        <div className="md:w-1/2">
          <Image src="/testimony.svg" alt="client image" width={700} height={700} />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
          <div className="text-center">
            <p className="text-xs text-purple-800">TESTIMONIALS</p>
            <h1 className="text-4xl font-bold">
              Our Clients <span className="text-purple-700">Love Us.</span>{' '}
            </h1>
            <p className="text-gray-500 pb-5">
              These are some of the positive feedbacks we have received from our clients.
            </p>
            <div className="flex flex-col items-center">
              <div key={testimonials[currentTestimonial].id} className="w-full h-52 items-center">
                <p className="text-gray-700 text-left">{testimonials[currentTestimonial].quote}</p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-full w-14 h-14 overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt="client image"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-700 font-bold">{testimonials[currentTestimonial].author}</h3>
                  <p className="text-gray-500 text-xs">{testimonials[currentTestimonial].description}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <FaArrowLeft className="text-gray-700 text-2xl cursor-pointer" onClick={handlePrevTestimonial} />
              <FaArrowRight className="text-gray-700 text-2xl cursor-pointer ml-4" onClick={handleNextTestimonial} />
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 my-10" />
    </div>
  );
};

export default Testimonials;