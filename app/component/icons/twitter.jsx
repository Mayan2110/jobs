import React from "react";

const TwitterIcon = ({ size = 24, color = "#1DA1F2", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.643 4.937c-.835.37-1.732.62-2.675.732a4.657 4.657 0 0 0 2.047-2.572 9.22 9.22 0 0 1-2.918 1.115 4.607 4.607 0 0 0-7.862 4.198A13.064 13.064 0 0 1 1.671 3.149a4.607 4.607 0 0 0 1.425 6.14 4.558 4.558 0 0 1-2.088-.576v.06c0 2.27 1.617 4.163 3.764 4.593a4.598 4.598 0 0 1-2.08.078 4.607 4.607 0 0 0 4.3 3.193 9.253 9.253 0 0 1-5.736 1.976A9.36 9.36 0 0 1 0 19.539a13.028 13.028 0 0 0 7.062 2.071c8.473 0 13.11-7.017 13.11-13.107 0-.2 0-.403-.014-.605a9.34 9.34 0 0 0 2.298-2.376l-.001-.007Z"
        fill={color}
      />
    </svg>

 
  );
};

export default TwitterIcon;
