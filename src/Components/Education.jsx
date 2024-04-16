import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
      <div className="inline-block border-b border-gray-400 w-16 mr-4"></div>
      <h2 className="text-3xl text-gray-600 inline-block sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">What did I study?</h2>
      <div className="inline-block border-b border-gray-400 w-16 ml-4"></div>
      <h2 className="text-3xl text-center text-gray-600 font-bold mb-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      My Education
      </h2>
      </div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {/* Education Card 1 */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6 text-center sm:max-w-xs">
            <FaGraduationCap className="text-4xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600">Kabarak University</p>
            <p className="text-gray-600">2020 - 2024</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Certificate
            </button>
          </div>

          {/* Education Card 2 */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6 text-center sm:max-w-xs mt-4 sm:mt-0">
            <FaBook className="text-4xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold">Full-Stack Software Engineering</h3>
            <p className="text-gray-600">ALX SE Program</p>
            <p className="text-gray-600">2022 - 2024</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Certificate
            </button>
          </div>

          {/* Education Card 3 */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6 text-center sm:max-w-24 mt-4 sm:mt-0">
            <FaCertificate className="text-4xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold">Python for Data Science</h3>
            <p className="text-gray-600">IBM Course</p>
            <p className="text-gray-600">2021 - 2021</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
