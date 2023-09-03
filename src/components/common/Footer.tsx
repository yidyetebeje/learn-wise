import React from 'react';
import {GiEarthAfricaEurope} from 'react-icons/gi'
import { GrFacebookOption, GrTwitter, GrYoutube} from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="justify-between px-4 py-8 md:px-20 md:py-16 lg:py-24 bg-purple-900/30 flex flex-col md:flex-row bottom-0">
      {/* logo */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold pt-4">
        <GiEarthAfricaEurope size={50} className='inline-block text-purple-800 pb-2' />
          <span className="font-montserrat">Learn</span>
          <span className="text-purple-800 text-3xl md:text-4xl">Wise</span>
        </h2>
      </div>
      {/* rights */}
      <div className="text-sm text-center text-gray-700 mt-4 md:mt-0 md:left-0">
        &copy; 2023 LearnWise, Inc. All right reserved.
      </div>
      {/* links */}
      <div className="mt-4 md:mt-0">
        <div className="flex space-x-6">
          <div className="rounded-full cursor-pointer ring-1 ring-purple-200 p-1 hover:bg-purple-300 bg-white transition duration-400">
            <GrFacebookOption size={20} />
          </div>
          <div className="rounded-full cursor-pointer ring-1 ring-purple-200 p-1 hover:bg-purple-300 bg-white transition duration-400">
            <GrTwitter size={20} />
          </div>
          <div className="rounded-full cursor-pointer ring-1 ring-purple-200 p-1 hover:bg-purple-300 bg-white transition duration-400">
            <GrYoutube size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;