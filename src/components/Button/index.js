import React from 'react';

const index = ({ title, onClick, style }) => {
  return (
    <button
      className={`bg-blue-500 place-items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${style}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default index;