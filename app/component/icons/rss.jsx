import React from "react";

const RSSIcon = ({ size = 32, color = "#555", ...props }) => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7_399)">
        <path
          d="M20 2.96997H4C2.9 2.96997 2 3.86997 2 4.96997V20.97C2 22.07 2.9 22.97 4 22.97H20C21.1 22.97 22 22.07 22 20.97V4.96997C22 3.86997 21.1 2.96997 20 2.96997ZM7.7 19.17C6.7 19.17 5.9 18.37 5.9 17.37C5.9 16.37 6.7 15.57 7.7 15.57C8.7 15.57 9.5 16.37 9.5 17.37C9.5 18.37 8.6 19.17 7.7 19.17ZM11.9 19.17C11.9 15.87 9.2 13.17 5.9 13.17V10.67C10.6 10.67 14.4 14.47 14.4 19.17H11.9ZM16.2 19.17C16.2 13.47 11.6 8.86997 5.9 8.86997V6.26997C13 6.26997 18.8 12.07 18.8 19.17H16.2Z"
          fill="black"
          fillOpacity={0.55}
        />
      </g>
      <defs>
        <clipPath id="clip0_7_399">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0 0.969971)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RSSIcon;
