import React from 'react';

const Blog = () => {
  return (
    <div id="blogs" className="bg-gray-100 flex flex-col items-center justify-center h-full py-10">
      <p className="text-2xl text-gray-500 text-center mb-6">Learn Something </p>
      <h2 className="text-3xl text-center font-bold mb-6">My Blogs</h2>
      
      {/* First Card */}
      <a href="#" className="flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md mb-6 w-3/4 lg:w-2/3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col lg:flex-row">
          <img className="object-cover w-full h-64 lg:h-auto lg:w-48 lg:rounded-l-lg lg:rounded-t-none" src="images/aws2.png" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to store Images on AWS S3 Using flask</h5>
            <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>
      </a>

      {/* Second Card */}
      <a href="#" className="flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md mb-6 w-3/4 lg:w-2/3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col lg:flex-row">
          <img className="object-cover w-full h-64 lg:h-auto lg:w-48 lg:rounded-l-lg lg:rounded-t-none" src="images/AI.png" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Continuous learning for Robotics using AI</h5>
            <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;
