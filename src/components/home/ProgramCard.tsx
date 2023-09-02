import React from 'react'

const ProgramCard = () => {
  return (
    <div className='flex-col justify-center text-center w-[350px] h-[500px] bg-white border-t-4 border-purple-600 rounded-md py-1 '>
        {/* name */}
        <div className='h-1/3 space-y-2 pt-2'>
            <h5 className='text-xl font-bold'>Personal</h5>
            <h1 className='text-5xl font-bold'>$0.0</h1>
            <p className='text-lg text-gray-700'>MONTHLY</p>

        </div>
        <hr />
        {/* property */}
        <div className='h-1/2 space-y-2 pt-2'>
            <h3 className='text-lg font-bold'>For Individuals</h3>
            <h4 className='text-gray-500'>30 Templates</h4>
            <h4 className='text-gray-500'>30 Templates</h4>
            <h4 className='text-gray-500'>30 Templates</h4>
            <h4 className='text-gray-500'>30 Templates</h4>

        </div>
        <hr className='py-1' />
        {/* buynow */}
        <div>
            <button className=' w-36 h-14 text-white font-bold rounded-full bg-purple-600 hover:border-700 transition duration-300 hover:border-purple-800 border-none hover:border-2 hover:shadow-lg'>
                Buy Now
            </button>
        </div>
      
    </div>
  )
}

export default ProgramCard
