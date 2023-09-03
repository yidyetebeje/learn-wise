"use client"

import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const faqsData = [
  {
    question: 'What is the note summarizing feature?',
    answer: 'The note summarizing feature allows users to input or upload notes and automatically generates concise summaries of the content. It helps users save time and quickly grasp the key points of their study materials.',
  },
  {
    question: 'How does the quiz provider work?',
    answer: 'The quiz provider feature enables users to create and take quizzes on various topics. Users can create multiple-choice or open-ended questions, set the quiz duration, and share the quizzes with others. It provides an interactive way to test knowledge and enhance learning.',
  },
  {
    question: 'What is the purpose of the chatbot?',
    answer: 'The chatbot feature serves as a virtual assistant that can provide instant responses to user queries. It uses natural language processing techniques to understand user input and provide relevant information or assistance. The chatbot enhances user engagement and provides personalized support.',
  },
  {
    question: 'Can I use the note summarizing feature for any type of document?',
    answer: 'The note summarizing feature is designed to work with various types of documents, including text files, PDFs, and online articles. However, the accuracy and effectiveness of the summarization may vary depending on the complexity and structure of the document.',
  },
  {
    question: 'Are the quizzes customizable?',
    answer: 'Yes, the quizzes are fully customizable. Users can choose the number of questions, the difficulty level, and the topics. They can also add their own questions and provide explanations for correct answers. This allows for a tailored learning experience.',
  },
];

  return (
    <div className="max-w-3xl mx-auto space-y-3 my-6">
      <p className="text-xs text-purple-800 text-center">FAQs</p>
      <h1 className='text-4xl text-center font-bold'>You have <span className='text-purple-800'>Questions ?</span></h1>
      <p className='text-sm text-gray-600 text-center'>And we have got answers to all of them. If you have some more questions you can contact us through our social media links.</p>

      {faqsData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 bg-gray-300 hover:bg-gray-400 transition duration-300 rounded-lg mb-4"
        >
          <button
            className="flex items-center justify-between px-4 py-3 w-full text-left"
            onClick={() => handleAccordionClick(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;