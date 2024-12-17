import React from "react";
import styled from "styled-components";

const HeartContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

const FilledHeart = ({ progress }) => {
  return (
    <HeartContainer>
      <svg viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heartGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset={`${progress}%`} stopColor="white" />
            <stop offset={`${progress}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M23.6,0c-2.7,0-5.3,1.3-7.6,3.9C13.7,1.3,11.1,0,8.4,0C3.8,0,0,3.8,0,8.4
            c0,6.8,8.3,11.9,16,20.1c7.7-8.2,16-13.3,16-20.1C32,3.8,28.2,0,23.6,0z"
          fill="url(#heartGradient)"
        />
        <path
          d="M23.6,0c-2.7,0-5.3,1.3-7.6,3.9C13.7,1.3,11.1,0,8.4,0C3.8,0,0,3.8,0,8.4
            c0,6.8,8.3,11.9,16,20.1c7.7-8.2,16-13.3,16-20.1C32,3.8,28.2,0,23.6,0z"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />
      </svg>
    </HeartContainer>
  );
};

export default FilledHeart;
