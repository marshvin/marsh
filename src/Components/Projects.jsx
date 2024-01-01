import React from 'react';

const Card = ({ image, title, paragraph }) => {
  return (
    <div className="w-full sm:w-96 md:w-96 lg:w-96 p-4">
      <div className="bg-cover bg-center h-80 sm:h-96 rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}>
        <div className="bg-opacity-60 h-full flex flex-col justify-end p-4">
          <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
          <p className="text-white text-sm mb-2">{paragraph}</p>
          <div className="flex flex-row space-x-2">
            <button className="text-white font-semibold py-2 px-4 rounded border border-red-500 hover:bg-red-500 hover:text-white transition-colors">
              View
            </button>
            <button className="text-white font-semibold py-2 px-4 rounded hover:text-red-500 hover:underline transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      image: 'images/ECommerce.jpg',
      title: 'Shoepalace',
      paragraph: 'This is a sample paragraph for Card 1.',
    },
    {
      image: 'images/cuisine-food-india-indian-wallpaper-preview.jpg',
      title: 'Pick a Meal',
      paragraph: 'This is a sample paragraph for Card 2.',
    },
    {
      image: 'images/airbnb.jpg',
      title: 'Airbnb recommender',
      paragraph: 'This is a sample paragraph for Card 3.',
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
    </div>
  );
};

export default CardList;
