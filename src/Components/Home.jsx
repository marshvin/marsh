import React, { useState, useEffect } from 'react';

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
        setNavbarBg('bg-white');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-black text-2xl font-semibold">
                Marsh
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-black hover:text-gray-300">
                  Home
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  About me
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  Blogs
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className={`text-black hover:text-gray-300 p-2 focus:outline-none focus:bg-gray-700 ${isOpen ? 'bg-black' : ''}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-black`}
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

      <section
        id="hero"
        className="bg-gray-100 flex flex-col-reverse sm:flex-row items-center px-6"
        style={{ height: '100vh' }}
      >
        <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
        <div className="sm:w-1/4">
            <img
              src="images/IMG_20220517_181301_111.jpg"
              alt="user"
              className="rounded-full max-w-full h-auto sm:max-w-xs"
            />
          </div>

          <div className="flex flex-col mb-12 md:w-1/2 md:ml-10">
            <h1 className="text-4xl font-bold text-center md:text-left">
              Introducing Vincent Marsh
            </h1>
            <p className="mt-4 text-center text-darkGrayishBlue md:text-left">
              I am a dedicated <b>Computer Scientist</b> with expertise as a{' '}
              <b>Full Stack Software Developer</b>. <br />
              I have a strong foundation in computer science principles and a
              proven track record of successfully managing and delivering
              projects. I excel at turning complex problems into efficient, scalable, 
              and user-friendly software applications.
            </p>
            <div className="flex justify-center mt-6 md:justify-start">
              <a
                href="#"
                className="py-2 px-6 text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
