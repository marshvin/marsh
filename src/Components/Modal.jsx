import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  const [phone] = useState('+254 (727)309204');
  const [email] = useState('vincentmarsh01@gmail.com');

  return (
    <div
      className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div
          onClick={onClose}
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fillRule="evenodd"
              d="M18 1.12L16.88 0 9 7.88 1.12 0 0 1.12 7.88 9 0 16.88 1.12 18 9 10.12 16.88 18 18 16.88 10.12 9z"
            ></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M18 1.12L16.88 0 9 7.88 1.12 0 0 1.12 7.88 9 0 16.88 1.12 18 9 10.12 16.88 18 18 16.88 10.12 9z"
                ></path>
              </svg>
            </button>
          </div>
          <p className="text-gray-600">
            <FaPhone className="inline-block mr-2" />
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-gray-600">
            <FaEnvelope className="inline-block mr-2" />
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
