import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';

function Education() {
  return (
    <section
      id="education"
      className="bg-gray-100  flex flex-col justify-center items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-2xl text-gray-500 text-center mb-6">What did I Study ?</p>
        <h2 className="text-3xl text-center font-bold mb-6">
          My Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Education Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaGraduationCap className="text-4xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600">Kabarak University</p>
            <p className="text-gray-600">2020 - 2024</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Certificate
            </button>
          </div>

          {/* Education Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaBook className="text-4xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold">Full-Stack Software Engineering</h3>
            <p className="text-gray-600">ALX SE Program</p>
            <p className="text-gray-600">2022 - 2023</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Certificate
            </button>
          </div>

          {/* Education Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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
