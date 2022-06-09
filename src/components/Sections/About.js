import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SmartPhone from "../../assets/smartphone.png";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";

const Section = styled.section`
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight}*2)`}; */
  min-height: 1000px;
  height: ${(props) => `calc(100vh - ${props.theme.navHeight}*2)`};
  min-width: 1500px;
  /* height: 100vh; */
  width: 100%;
  /* background-color: black; // 추후 변경 */
  position: relative;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
  overflow: hidden;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  //min-height:100vh;
  margin: 0 auto;
  background-color: transparent; // 추후 변경

  z-index: 2;
`;

const Box = styled.div`
  width: 100%;
  height: 80%;
  max-width: 1300px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5%;
  top: 15%;
  z-index: 2;
  opacity: 0;
`;

const BoxPara = styled.div`
  width: 40%;
  height: 30%;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 10%;
  opacity: 0;
  z-index: 2;
`;
const TitleBold = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 800;
`;
// const TitleBoldPink =styled.TitleBold`
// color:${props=>props.theme.textPink};
// `
const TitleBoldPink = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 800;
  color: ${(props) => props.theme.textPink};
`;
const ParaLight = styled.span`
  font-size: ${(props) => props.theme.fontms};
  font-weight: 200;
`;
const ParaBold = styled.span`
  font-size: ${(props) => props.theme.fontms};
  font-weight: 500;
`;

const About = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    const Boxes = document.querySelector(".Boxes");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".Boxes", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".Boxes",
        start: "top 20%",
        end: "bottom bottom",
      },
      ease: "none",
      duration: 2,
    });
  });
  return (
    <Section id="About">
      <Container>
        <Box className="Boxes" ref={boxRef}>
          <TitleBoldPink>EVERYONE</TitleBoldPink>
          <br></br>
          <TitleBold>IS A CREATOR</TitleBold>
        </Box>
        <BoxPara className="Boxes" ref={boxRef}>
          <ParaLight>We connect spatial</ParaLight>
          <ParaBold> creators</ParaBold>
          <ParaLight>
            {" "}
            with metaverse platforms on your terms, not theirs, so you can focus
            on keep making cool stuff, while we deal with the rest of it
          </ParaLight>
        </BoxPara>
      </Container>
    </Section>
  );
};

export default About;
