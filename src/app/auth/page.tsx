import AuthForm from '@/components/auth-form'
import React from 'react'
import Image from "next/image";
export default function Page() {
  return (
    <div className="w-screen h-screen bg-blue-gem-800 flex items-center  ">
      <div className="w-2/3 mx-auto h-2/3 my-auto bg-white flex flex-row items-center rounded-2xl shadow-lg">
        <div className="w-1/3 bg-white h-full p-10 flex flex-col gap-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-center"><span className="text-blue-gem-800 ">Learn</span>Wise</h1>
          <p className=" text-center">
            Unlock your academic potential with our AI-powered student tutor,
            designed to transform your notes into interactive quizzes and
            personalized study materials
          </p>
          <div className="">
            <AuthForm />
            <p className="text-sm text-gray-500 text-center">I agree to abide by learnwise <a href="#" className="border-gray-400 border-dotted border-b-2">Terms of Service</a> and its Privacy Policy</p>
          </div>
         
        </div>
        <div className="w-2/3 bg-blue-gem-200 h-full relative rounded-2xl">
          <Image
            src="/Learning-cuate.png"
            layout="fill"
            alt="student studying"
          />
        </div>
      </div>
    </div>
  )
}
