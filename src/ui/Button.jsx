import React from 'react';

export const Button = ({ label, onClick, size = "large",extraClasses="" }) => {
  return (
    <div>
      <button 
        type="button" 
        className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${size === "large" ? "w-full" : "w-auto"} ${extraClasses}`} 
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

