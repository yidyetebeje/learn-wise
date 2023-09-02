import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='  w-full h-screen space-y-6 px-16 md:flex'>
        {/* text */}
        <div className='w-1/2 text-center pt-40'>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-left ">
            Prepare for Your Exams<br /> <span className='text-purple-800'>with LearnWise</span>
          </h1>
          <p className="text-xs md:text-lg mb-8 max-w-lg text-left">
            LearnWise is the ultimate platform that helps students succeed in their exams. 
            With our powerful features, you can easily summarize your notes and take 
            interactive quizzes to test your knowledge.
          </p>
          <div className='relative w-3/4 flex'>
            <input 
                type="text"
                placeholder='Your E-mail Address'
                className='w-full h-16 rounded-full px-6 py-2 outline-none focus:ring-2 focus:ring-purple-700 text-lg text-gray-700'
            />
            <div className='absolute right-0 p-1'>
                <button className='bg-purple-700 hover:bg-purple-900 transition duration-500 text-white font-semibold hover:font-bold rounded-full w-32 h-14'>
                Get Started
                </button>
            </div>
            </div>
                
        </div>
        {/* svg  */}
        <div className="w-1/2 flex justify-center items-center">
            <Image 
                src='/opt2.svg'
                alt="hero image"
                width={700}
                height={700}

            />
        </div>                      

      
    </div>
    <hr className='border border-1 border-purple-100 px-28 mb-10'/>

    </div>
    
    
  )
}

export default Hero
