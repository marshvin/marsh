import React, { useState, useEffect } from 'react';
import Particles from 'particles.js';
import { FaHome, FaBlog, FaEnvelope, FaFileDownload, FaAngleRight, FaProjectDiagram, FaGraduationCap, FaTools, FaCogs } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState('w-12');
  const [navbarColor, setNavbarColor] = useState('text-white');
  const [arrowColor, setArrowColor] = useState('text-white');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setNavbarWidth(isOpen ? 'w-12' : 'w-28');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarColor('text-black'); // Change text color to black
        setArrowColor('text-black'); // Change arrow color to black
      } else {
        setNavbarColor('text-black'); // Change text color to white
        setArrowColor('text-black'); // Change arrow color to white
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
        value: '#000000', // Set particle color to black
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
        enable: true, // Enable lines between particles
        distance: 150,
        color: '#000000',
        opacity: 0.4,
        width: 1,
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
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse', // Change mode to repulse
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <nav
        className={`fixed top-0 left-0 h-full z-10 transition-all duration-300 bg-transparent ${navbarWidth}`}
      >
       <div className="max-w-xs w-16 mx-auto flex flex-col items-center justify-center h-full mr-4">
          <div className="flex flex-col items-center mt-10 space-y-4">
            <Link to="hero" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaHome className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Home</span>}
            </Link>
            <Link to="project" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaProjectDiagram className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Project</span>}
            </Link>
            <Link to="education" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaGraduationCap className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Education</span>}
            </Link>
            <Link to="services" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaTools className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Services</span>}
            </Link>
            <Link to="skills" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaCogs className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Stack</span>}
            </Link>
            <Link to="blogs" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaBlog className="inline-block text-4xl sm:text-3xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Blogs</span>}
            </Link>
            <Link to="contact" smooth={true} duration={500} className={`flex items-center hover:text-gray-300 ${navbarColor}`} style={{ cursor: 'pointer' }}>
              <FaEnvelope className="inline-block text-2xl sm:text-2xl md:text-3xl lg:text-3xl" />
              {isOpen && <span className="text-xl sm:text-lg md:text-2xl lg:text-3xl ml-2">Contact</span>}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center">
          <button
            onClick={toggleNavbar}
            className={`py-2 focus:outline-none ${navbarColor}`}
          >
            <FaAngleRight size={24} className={arrowColor} />
          </button>
        </div>
      </nav>

      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

      <section
        id="hero"
        className="flex flex-col-reverse sm:flex-row items-center px-6"
        style={{ height: '100vh' }}
      >
        <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
          {/* Image */}
          <div className="relative sm:w-1/2">
            <img
              src="images/school.jpg"
              alt="user"
              className="h-32 w-32 md:h-full md:w-full md:mt-8 sm:w-full border border-red-500 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col mb-12 md:w-1/2 md:ml-36">
            <h1 className="text-4xl text-black font-bold text-center md:text-left">
              Introducing{' '}
              <p className="text-red-500">Vincent Marsh</p> <br />
              <b> A Full Stack Software Developer</b>
            </h1>
            <p className="mt-4 text-black text-center md:text-left">
              Programmer <b>Computer Science</b> Software Engineer
            </p>
            <div className="flex justify-center mt-6 md:justify-start space-x-6">
              {/* About Me button */}
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="py-2 px-6 text-white bg-red-500  hover:bg-red-600 cursor-pointer"
              >
                About Me
              </Link>
              {/* Download Resume button */}
              <a
                href="images/VINCENTRESUME.pdf"
                download
                className="flex items-center py-2 px-6 text-white bg-gray-800  hover:bg-gray-900"
              >
                <FaFileDownload className="mr-2" size={24} /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
