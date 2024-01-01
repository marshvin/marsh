import React from 'react';
import { BsPencilSquare, BsGrid3X2, BsTools, BsGraphUp } from 'react-icons/bs';

function Service() {
  const services = [
    {
      icon: <BsPencilSquare className="icon text-5xl" />,
      title: 'Web Development',
      subtitle: 'Designing and developing websites or web applications, ranging from static sites to dynamic, interactive platforms.',
    },
    {
      icon: <BsGrid3X2 className="icon text-5xl" />,
      title: 'Software Development',
      subtitle: 'Creating tailored software solutions to meet the specific needs of a client or business.',
    },
    {
      icon: <BsTools className="icon text-5xl" />,
      title: 'Database Design and Management',
      subtitle: 'Designing, implementing, and optimizing databases to store and manage data efficiently.',
    },
    {
      icon: <BsGraphUp className="icon text-5xl" />,
      title: 'API Development',
      subtitle: 'Creating Application Programming Interfaces (APIs) to enable communication between different software systems or services.',
    },
  ];

  return (
    <section className="bg-gray-100 section flex justify-center items-center" id="service">
      <div className="container text-center">
        <p className="text-2xl text-gray-500 text-center mt-12 mb-6">What can I do ?</p>
        <h2 className="text-3xl text-center font-bold mb-6">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="service-card bg-white rounded-lg shadow-md h-full overflow-hidden transition-all duration-300 group flex flex-col">
                <div className="body flex items-center justify-center flex-col p-4">
                  <div className="icon mb-2">{service.icon}</div>
                  <h6 className="title font-bold text-black transition-transform transform group-hover:-translate-y-2 group-hover:text-blue-500">
                    {service.title}
                  </h6>
                  <p className="subtitle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
