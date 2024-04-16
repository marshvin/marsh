import React, { useState } from 'react';

const Card = ({ image, title, paragraph, viewLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-full sm:w-96 md:w-96 lg:w-96 p-4">
      <div className="bg-cover bg-center h-80 sm:h-96 rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}>
        <div className="bg-opacity-60 h-full flex flex-col justify-end p-4">
          <h2 className="text-white text-4xl font-semibold mb-2">{title}</h2>
          {showDetails && <p className="text-white font-bold text-sm mb-2">{paragraph}</p>}
          <div className="flex flex-row space-x-2">
            <button onClick={toggleDetails} className="text-white font-semibold py-2 px-4 rounded hover:text-red-500 hover:underline transition-colors">
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>
            <a href={viewLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold py-2 px-4 rounded border border-red-500 hover:bg-red-500 hover:text-white transition-colors">View</a>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      image: 'images/bnb.jpg',
      title: 'Liftloft',
      paragraph: 'Trained and Deployed a Machine Learning Algorithm for Airbnb Recommendations in Kenya. The recommendation algorithm runs on a webplatfrom',
      viewLink: 'https://liftloft-89d137ccc2b3.herokuapp.com/',
    },
    {
      image: 'images/cook2.jpg',
      title: 'DishDelight',
      paragraph: 'A nice way to pick your next meal for all cooking enthusiasts as this webapp helps you generate meals based on ingredients you have!',
      viewLink: 'https://github.com/marshvin/DishDelight',
    },
    {
      image: 'images/ECommerce.jpg',
      title: 'Shoepalace',
      paragraph: 'This is an ecommerce website for selling shoes. It is built ReactJS, Nodejs and Postgresql',
      viewLink: 'https://github.com/marshvin/Shoepalacet',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <p className="text-2xl text-gray-500 mb-6">What have I done ?</p>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <a href="https://github.com/marshvin"
    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-red-700 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
    <span class="ml-2">See more</span>
</a>
    </div>
  );
};

export default CardList;
