import React from 'react';

const Whatsapp: React.FC = () => {
  return (
    <a
      href="https://wa.me/+917386191621" // Replace with your WhatsApp number
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="absolute right-20 bg-gray-800 text-white p-2 rounded-md text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
        Chat with us!
      </span>
      <i className="fab fa-whatsapp text-white text-3xl relative z-10" />
    </a>
  );
};

export default Whatsapp;
