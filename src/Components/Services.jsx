import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Service() {
  return (
    <div id="services" className="mb-4 w-full h-full">
      <div className="text-center mt-4">
     <div className="inline-block border-b border-gray-400 w-16 mr-4"></div>
     <h2 className="text-3xl text-gray-600 inline-block sm:text-xl md:text-xl lg:text-3xl xl:text-3xl">What can I offer?</h2>
    <div className="inline-block border-b border-gray-400 w-16 ml-4"></div>
    <h2 className="text-3xl text-center text-gray-600 font-bold mb-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
    My Services
  </h2>
</div>

      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Change interval as per your requirement
        stopOnHover={true}
        transitionTime={500} // Change transition time as per your requirement
        showStatus={false}
        className="w-full h-full"
      >
        <div className="flex justify-center items-center h-full">
          <img src="images/male.jpg" alt="Service 1" className="w-full h-auto max-h-96" style={{ maxWidth: '50%' }} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">End-to-End Web Application Development</h2>
            <p className="mt-2">Leveraging modern frontend (React) for dynamic user interfaces, coupled with backend technologies such as Node.js or Django for robust server-side logic.</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="images/coder1.png" alt="Service 2" className="w-full h-auto max-h-96" style={{ maxWidth: '40%' }} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Custom Software Solutions Development</h2>
            <p className="mt-2">Crafting tailored software solutions including Machine Learning and AI sofware to address specific business needs, whether it's automating workflows, managing data, or enhancing productivity.</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="images/service3.png" alt="Service 2" className="w-full h-auto max-h-96" style={{ maxWidth: '40%' }} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Database Design and Management</h2>
            <p className="mt-2">Implementing database management systems (DBMS) to organize and manipulate data effectively, ensuring scalability, reliability, and data integrity.</p>
          </div>
        </div>
        {/* Add more slides here as needed */}
      </Carousel>
    </div>
  );
}

export default Service;
