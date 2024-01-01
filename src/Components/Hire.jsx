import React, { useState } from 'react';
import Modal from './Modal';

const Hire = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-blue-100 h-2/6 flex items-center justify-center">
      <section className="bg-primary p-8 text-center">
        <div className="mb-4">
          <h6 className="text-light text-2xl font-bold">Want to work with me?</h6>
          <p className="text-light">Always feel Free to Contact & Hire me</p>
        </div>
              <button
        id="hireMeBtn"
        className="bg-blue-600 text-light text-lg my-font py-2 px-4 rounded border border-light hover:bg-darkPrimary focus:outline-none focus:border-darkPrimary"
        onClick={openModal}
      >
        Hire Me
      </button>

      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Hire;
