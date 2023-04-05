import React from 'react'

function Text() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g filter="url(#filter0_d_182_7059)">
        <mask
          id="path-1-outside-1_182_7059"
          width="9"
          height="22"
          x="11"
          y="5"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M11 5H20V27H11z"></path>
          <path d="M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z"></path>
        </mask>
        <path
          fill="#1F1F1F"
          d="M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z"
        ></path>
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z"
          mask="url(#path-1-outside-1_182_7059)"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_182_7059"
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
            result="effect1_dropShadow_182_7059"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_182_7059"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default Text
