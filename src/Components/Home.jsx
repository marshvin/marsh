import React, { useState, useEffect } from 'react';
import Particles from 'particles.js';
import { FaFileDownload } from 'react-icons/fa';


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg('bg-gray-500');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.particlesJS('particles-js', particleConfig);
  }, []);
  

  const particleConfig = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  };
  

  return (
    <div className="relative overflow-hidden">
   <nav className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ${navbarBg}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center h-16"> {/* justify-center to center the navbar */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-center space-x-6"> {/* Increased space-x-6 */}
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About me
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Blogs
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          onClick={toggleNavbar}
          className={`text-white hover:text-gray-300 p-2 focus:outline-none focus:bg-gray-700 ${isOpen ? 'bg-black' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-white`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {isOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
        <a href="#" className="text-white block hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white block hover:text-gray-300">
          About me
        </a>
        <a href="#" className="text-white block hover:text-gray-300">
          Blogs
        </a>
        <a href="#" className="text-white block hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  )}
</nav>


      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

      <section id="hero" className="bg-black flex flex-col-reverse sm:flex-row items-center px-6" style={{ height: '100vh' }}>
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
          {/* Image */}
          <div className="relative sm:w-1/2">
          <img src="images/coder1.png" alt="user" class="h-32 w-32 md:h-full md:w-full md:mt-8 sm:w-full border border-red-500 rounded-full" />

          </div>


          {/* Content */}
          <div className="flex flex-col mb-12 md:w-1/2 md:ml-36">
            <h1 className="text-4xl text-white font-bold text-center md:text-left">
              Introducing <p className="text-red-500">Vincent Marsh</p> <br /><b> A Full Stack Software Developer</b>
            </h1>
            <p className="mt-4 text-white text-center text-darkGrayishBlue md:text-left">
              Programmer  <b>Computer Science</b>  Software Engineer
            </p>
            <div className="flex justify-center mt-6 md:justify-start space-x-6">
              {/* About Me button */}
              <a href="#" className="py-2 px-6 text-white bg-red-500  hover:bg-red-600">About Me</a>
              {/* GitHub button */}
              
              {/* Download Resume button */}
              <button className="flex items-center py-2 px-6 text-white bg-gray-800  hover:bg-gray-900">
                <FaFileDownload className="mr-2" size={24} /> Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;