import React from 'react'

function Default() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g filter="url(#filter0_d_182_6965)">
        <mask
          id="path-1-outside-1_182_6965"
          width="10"
          height="16"
          x="2"
          y="2"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M2 2H12V18H2z"></path>
          <path d="M11 11.3L3 3v11.5l3-.5 2.3 3 .7-.3-.3-3.7 2.3-1.7z"></path>
        </mask>
        <path
          fill="#1F1F1F"
          d="M11 11.3L3 3v11.5l3-.5 2.3 3 .7-.3-.3-3.7 2.3-1.7z"
        ></path>
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 11.3L3 3v11.5l3-.5 2.3 3 .7-.3-.3-3.7 2.3-1.7z"
          mask="url(#path-1-outside-1_182_6965)"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_182_6965"
          width="28"
          height="28"
          x="-2"
          y="-2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_182_6965"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_182_6965"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default Default
