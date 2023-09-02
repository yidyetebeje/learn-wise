import React from 'react';
import { ProgramProps } from './Programs';

interface ProgramCardProps {
  program: ProgramProps;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="flex-col justify-center text-center md:w-[350px] w-full mx-auto mb-3 md:h-[410px] h-full bg-white border-t-4 border-purple-600 rounded-md py-1">
      {/* name */}
      <div className="h-1/3 space-y-2 pt-2">
        <h5 className="text-xl font-bold">{program.name}</h5>
        <h1 className="text-5xl font-bold">{program.price}</h1>
        <p className="text-lg text-gray-700">MONTHLY</p>
      </div>
      <hr className="py-1 text-gray-100" />
      {/* property */}
      <div className="h-1/2 space-y-2 pt-2">
        <h3 className="text-lg font-bold">{program.property}</h3>
        <h4 className="text-gray-500">{program.templates}</h4>
        <h4 className="text-gray-500">{program.storage}</h4>
      </div>
      <hr className="py-1 text-gray-100" />
      {/* buynow */}
      <div className="flex justify-center items-center">
        <button
          className="w-36 h-12 text-white font-bold rounded-full bg-purple-600 hover:bg-purple-800 hover:border-700 transition duration-300 hover:border-purple-800 border-none hover:border-2 hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;