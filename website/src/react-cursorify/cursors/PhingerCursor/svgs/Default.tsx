import React from 'react'

function Default() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g filter="url(#filter0_d_182_6967)">
        <mask
          id="path-1-outside-1_182_6967"
          width="14"
          height="22"
          x="1.2"
          y="2"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M1.2 2H15.2V24H1.2z"></path>
          <path d="M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z"></path>
        </mask>
        <path
          fill="#1F1F1F"
          d="M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z"
        ></path>
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z"
          mask="url(#path-1-outside-1_182_6967)"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_182_6967"
          width="36"
          height="36"
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
            result="effect1_dropShadow_182_6967"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_182_6967"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default Default
