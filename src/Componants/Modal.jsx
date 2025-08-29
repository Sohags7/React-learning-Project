import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg">
        <button
          className="absolute top-2 right-2 bg-gray-700 text-white rounded-full p-1"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={image} alt="Modal" className="max-w-full max-h-screen" />
      </div>
    </div>
  );
};

export default Modal;
