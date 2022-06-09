import React from "react";
import styled from "styled-components";
import GIF from "../assets/Donut.png";

const VideoContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    @media (max-width: 2700px) {
      opacity: 1;
    }
    z-index: 10;
  }
`;
const CoverDonut = () => {
  return (
    <VideoContainer>
      <img src={GIF} />
    </VideoContainer>
  );
};

export default CoverDonut;
