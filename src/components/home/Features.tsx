import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <div>
      <div className='space-y-2'>
      <p className="text-xs text-purple-800 text-center">FEATURES</p>
      <h1 className='text-4xl text-center font-bold'>We have Amazing <span className='text-purple-800'>Service.</span></h1>
      <p className='text-sm text-gray-600 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.</p>

      <div className='flex-col'>
        <div className='flex flex-col md:flex-row justify-evenly border border-gray-100 md:w-[1050px] mx-auto rounded-2xl space-y-5 my-4'>
          <div className='w-full md:w-1/2'>
            <Image 
              src='/opt1.svg'
              alt="hero image" 
              layout="responsive"
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left pt-16'>
            <h2 className='md:text-3xl font-bold pb-6'>Note Upload and Summarization</h2>
            <p className='text-gray-600'>Easily upload your study notes in various formats. Our AI-powered system analyzes your notes and generates concise summaries. Save time and quickly grasp the key points of your study material.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-evenly border border-gray-100 md:w-[1050px] mx-auto rounded-2xl space-y-5 my-4'>
          <div className='w-full md:w-1/2 text-center md:text-left pt-28'>
            <h2 className='text-3xl font-bold pb-6'>Interactive Chatbot Assistance</h2>
            <p className='text-gray-600'>Get instant answers to your questions from our intelligent chatbot. Ask queries related to your uploaded notes, exam topics, or study techniques. Receive personalized study recommendations and valuable exam preparation guidance.</p>
          </div>
          <div className='w-full md:w-1/2'>
            <Image 
              src= '/hero2.svg'
              alt="hero image" 
              layout="responsive"
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-evenly border border-gray-100 md:w-[1050px] mx-auto rounded-2xl space-y-5 my-4'>
          <div className='w-full md:w-[400px] h-80 p-1'>
            <Image 
              src='/quizes.svg'
              alt="hero image" 
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left pt-16'>
            <h2 className='text-3xl font-bold pb-6'>AI-Generated Quizzes for Practice</h2>
            <p className='text-gray-600'>Access a wide range of quizzes and practice tests generated by our AI. Assess your knowledge and identify areas where you need improvement. Reinforce your understanding of the study material through interactive and engaging quizzes.</p>
          </div>
        </div>
      </div>
    </div>
    <hr className='border border-gray-200 px-14 my-20' />

    </div>
    
  );
}

export default Features;