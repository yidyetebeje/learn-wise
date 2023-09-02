import React from 'react'
import ProgramCard from './ProgramCard'

const Programs = () => {
  return (
    <div className='mx-auto mb-10 space-y-4'>
        <h1 className='text-3xl text-center'>Reasonable & Flexible <span className='text-purple-700'>Plans.</span> </h1>
        <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex justify-evenly'>
        
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
    </div>
    </div>
    
  )
}

export default Programs
