import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaPhp, FaEgg, FaJava } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-2xl text-gray-500 text-center mb-6">What languages and Frameworks do I use ?</p>
        <h2 className="text-3xl text-center font-bold mb-6">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* HTML5 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaHtml5 className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">HTML5</h3>
          </div>

          {/* CSS3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaCss3 className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">CSS3</h3>
          </div>

          {/* JavaScript */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaJs className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>

          {/* React */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaReact className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">ReactJS</h3>
          </div>

          {/* Python */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaPython className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">Python</h3>
          </div>

          {/* PHP */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaPhp className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">PHP</h3>
          </div>

            {/* Nodejs */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaJs className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">NodeJs</h3>
          </div>
           {/* Postgres */}
           <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center">
              <FaJava className="text-5xl text-gray-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold">Java</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
