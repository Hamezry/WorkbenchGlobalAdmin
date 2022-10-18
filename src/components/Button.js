import React from 'react';
import spinner from '../Assets/spinner.gif';

// Text is the default text on the button
// type is one of button | reset | submit
// loading is a boolean indication an API call
// onClick is an optional callback for type button

const Button = ({ text, loading, type, onClick }) => {
  return (
    <button
      className={`w-full font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center ${
        loading ? 'py-2' : 'py-4'
      }`}
      type={type ?? 'button'}
      disabled={loading}>
      {loading ? <img src={spinner} alt='Loading...' /> : text}
    </button>
  );
};

export default Button;
