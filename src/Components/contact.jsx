import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-gray-100">
      <p className="text-2xl text-gray-500 text-center mb-6">Let's Get in touch ?</p>
      <h2 className="text-3xl text-center font-bold mb-6">Contact Me</h2>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 h-32 w-full"></div>

      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        {/* Social Media */}
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div className="bg-gray-300 border border-gray-500 w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>
            {/* Social Media Links */}
            <div className="flex flex-col gap-3">
              <a href="https://github.com/marshvin" className="flex items-center hover:text-white hover:bg-gray-500 p-2">
                <FaGithub className="w-6 h-6 m-2" />
                Github
              </a>
              <a href="https://www.linkedin.com/in/vincent-marsh-12b093222/" className="flex items-center hover:text-white hover:bg-gray-500 p-2">
                <FaLinkedin className="w-6 h-6 m-2" />
                Linkedin
              </a>
              <a href="#" className="flex items-center hover:text-white hover:bg-gray-500 p-2">
                <FaTwitter className="w-6 h-6 m-2" />
                Twitter
              </a>
              <a href="#" className="flex items-center hover:text-white hover:bg-gray-500 p-2">
                <FaFacebook className="w-6 h-6 m-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Contact Me Form */}
        <form action="#" className="w-full md:w-1/2 border p-6 bg-gray-300">
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-3 py-2 bg-gray-500 border border-gray-500 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="px-3 py-2 bg-gray-500 border border-gray-500 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                id="message"
                className="px-3 py-2 bg-gray-500 border border-gray-500 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button
              type="submit"
              className="w-full bg-gray-500 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-gray-900 hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
