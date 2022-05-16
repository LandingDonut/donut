import React from "react";
import styled from "styled-components";
import CoverDonut from "../CoverDonut";
import GIF from "../../assets/donut.gif";
import Down from "../../assets/Down.png";
import { Link, scroller } from "react-scroll";
//import About from './About'
import { useRef } from "react";
import src from "gsap/src";

// min-height: ${props => `calc(100vh-${props.theme.navHeight})`};
// const { scrollTop } = outerDivRef.current;
const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  /* height: 100vh; */
  position: relative;
  background-color: black; // 추후 변경
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  margin: 0;
  background-color: black; // 추후 변경
  /* display: flex; */
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  height: 50%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: 10%;
  top: 20%;
`;

const GifBox = styled.div`
  width: 60%;
  height: 60%;
  min-width: 800px;
  background-color: transparent;
  z-index: 1;
  display: flex;
  /* justify-content:center; */
  align-items: center;
  position: absolute;
  right: 0%;
  top: 0%; ;
`;
const TitleLight = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 200;
`;
const TitleBold = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
`;
const ParaLight = styled.span`
  font-size: ${(props) => props.theme.fontms};
  font-weight: 200;
`;
const ParaBold = styled.span`
  font-size: ${(props) => props.theme.fontms};
  font-weight: 500;
`;
const DownButton = styled.button`
  background-color: ${(props) => props.theme.body};
  border: none;
  :hover {
    cursor: pointer;
  }
  position: relative;
  /* bottom: 0%; */
  /* margin-top: 10%; */
  margin-top: 70vh;
  margin-left: 50%;
  z-index: 6;
`;
const Home = () => {
  return (
    <Section id="Home">
      <Container>
        <Box>
          <TitleLight>Architecture for the mass through</TitleLight>
          <TitleBold> Blockchain</TitleBold>
          <TitleLight> and</TitleLight>
          <TitleBold> metaverse</TitleBold>
          <TitleLight> technology</TitleLight>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ParaLight>We connect spatial</ParaLight>
          <ParaBold> creators</ParaBold>
          <ParaLight>
            {" "}
            with metaverse platforms on your terms, not theirs, so you can focus
            on keep making cool stuff, while we deal with the rest of it
          </ParaLight>
        </Box>
        <GifBox>
          <CoverDonut />
        </GifBox>
        {/* <div height></div> */}
        <DownButton>
          <Link to="About" spy={true} smooth={true} offset={0} duration={1200}>
            <img src={Down} color="black" />
          </Link>
        </DownButton>
      </Container>
    </Section>
  );
};

export default Home;
