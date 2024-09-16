import React from 'react';

export const Cat = () => {
  return (
    <span className="group mx-2 mb-2 inline-block h-4 w-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 9"
        className="hidden h-4 w-4 drop-shadow-md group-hover:inline-block"
      >
        <rect fill="#FFB100" x="1" y="1" width="1" height="1" />
        <rect fill="#FFB100" x="7" y="1" width="1" height="1" />
        <polygon fill="#FFB100" points="3,2 2,2 2,4 1,4 1,7 2,7 2,5 4,5 4,4 3,4" />
        <rect fill="#FFB100" x="4" y="3" width="1" height="1" />
        <polygon fill="#FFB100" points="6,2 6,4 5,4 5,5 7,5 7,7 8,7 8,4 7,4 7,2" />
        <rect fill="#D38100" x="1" y="2" width="1" height="2" />
        <rect fill="#D38100" x="3" y="3" width="1" height="1" />
        <rect fill="#D38100" x="5" y="3" width="1" height="1" />
        <rect fill="#D38100" x="7" y="2" width="1" height="2" />
        <rect fill="#343341" x="2" y="5" width="1" height="1" />
        <rect fill="#343341" x="6" y="5" width="1" height="1" />
        <path fill="#EBEAF7" d="M6,6V5H5V4H4v1H3v1H2v2h5V6H6z M5,7H4V6h1V7z" />
        <rect fill="#FFAEB0" x="4" y="6" width="1" height="1" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 9"
        className="inline-block h-4 w-4 drop-shadow-md group-hover:hidden"
      >
        <polygon
          fill="#F92F3C"
          points="2,2 4,2 4,3 5,3 5,2 7,2 7,3 8,3 8,5 7,5 7,6 6,6 6,7 5,7 5,8 4,8 4,7 3,7 3,6 2,6 2,5 1,5 1,3 3,3 3,4 2,4"
        />
        <polygon fill="#FFAEB0" points="2,3 3,3 3,4 2,4" />
      </svg>
    </span>
  );
};
