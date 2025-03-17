import React from "react";
import "./styles/mainpage.css";

function FrontPokedex({ openPokedex }) {
  return (
    <div>
      <svg className="front-pokedex" viewBox="0 0 594 909" fill="none">
        <path
          d="M45 3.00024H592L592 826H45V3.00024Z"
          fill="#F80D66"
          stroke="black"
          stroke-width="4"
        />
        <ellipse
          cx="132.104"
          cy="87.3371"
          rx="74.1135"
          ry="76.2575"
          fill="#3398CC"
          stroke="white"
          stroke-width="6"
        />
        <ellipse
          cx="271.005"
          cy="59.5611"
          rx="22.5776"
          ry="23.2308"
          fill="#F71700"
          stroke="black"
          stroke-width="4"
        />
        <ellipse
          cx="325.977"
          cy="59.5611"
          rx="22.5776"
          ry="23.2308"
          fill="#FBCA66"
          stroke="black"
          stroke-width="4"
        />
        <ellipse
          cx="381.93"
          cy="59.5611"
          rx="22.5776"
          ry="23.2308"
          fill="#36CA6F"
          stroke="black"
          stroke-width="4"
        />
        <line
          x1="592"
          y1="99.4324"
          x2="242.538"
          y2="99.4324"
          stroke="black"
          stroke-width="5"
        />
        <line
          y1="-2.5"
          x2="91.6117"
          y2="-2.5"
          transform="matrix(-0.451503 0.89227 -0.881479 -0.472222 242.672 97.0027)"
          stroke="black"
          stroke-width="5"
        />
        <line
          x1="206.217"
          y1="179.225"
          x2="40.3203"
          y2="179.225"
          stroke="black"
          stroke-width="5"
        />
        <rect
          x="208.198"
          y="766.575"
          width="236.538"
          height="6.08027"
          rx="3.04013"
          fill="#F80D66"
          stroke="black"
          stroke-width="2"
        />
        <path
          onClick={openPokedex}
          d="M57.2646 471.161L81.3128 495.46L57.0708 519.554L57.2646 471.161Z"
          fill="#FBCA66"
          stroke="black"
          stroke-width="2"
        />
        <line x1="280.821" y1="908.5" x2="281.803" y2="908.5" stroke="white" />
        <line
          x1="42.8018"
          y1="177.735"
          x2="42.8017"
          y2="828.197"
          stroke="black"
          stroke-width="3"
        />
        <g filter="url(#filter0_i_1011_39)">
          <path
            d="M4 27.0718L44.3819 3V821.892H592L588.553 858H30.593C18.2616 857.601 12.3637 852.946 4 835.934V27.0718Z"
            fill="#AF1851"
          />
        </g>
        <path
          d="M4 27.0718L44.3819 3V821.892H592L588.553 858H30.593C18.2616 857.601 12.3637 852.946 4 835.934V27.0718Z"
          stroke="black"
        />
        <path d="M44 823L593 823" stroke="black" stroke-width="3" />
        <line
          x1="50.5"
          y1="177"
          x2="50.5"
          y2="824"
          stroke="black"
          stroke-width="3"
        />
        <path d="M4 27L44.7205 1.99998" stroke="black" stroke-width="3" />
        <line
          x1="592.493"
          y1="827.144"
          x2="589.464"
          y2="858.448"
          stroke="black"
          stroke-width="3"
        />
        <defs>
          <filter
            id="filter0_i_1011_39"
            x="3.5"
            y="2.11987"
            width="589.05"
            height="860.38"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1011_39"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default FrontPokedex;
