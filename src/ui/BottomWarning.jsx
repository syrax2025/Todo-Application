import React from 'react';
import { Link } from "react-router-dom"; // Correct import

export const BottomWarning = ({ label, buttonText, redirectTo }) => {
  return (
    <div className='flex font-normal justify-center'>
      <p className='mr-2'>{label}</p>
      <Link style={{ color: 'black', textDecoration: "underline" }} to={redirectTo}>
        {buttonText}
      </Link>
    </div>
  );
};
