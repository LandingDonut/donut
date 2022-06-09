import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import SmartPhone from "../../assets/smartphone.png";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import IciriDemo from "../../assets/iPhoneUI272.mp4";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  /* height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* height: 100vh; */
  position: relative;
  /* background-color: black; // 추후 변경 */
  display: flex;
  justify-content: center;
  align-items: top;
  display: flex;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`;
const GifBox = styled.div`
  /* width: 60%; */
  height: 60%;
  /* min-height: 60%; */
  top: 40vh;
  min-width: 1500px;
  background-color: transparent;
  z-index: 5;
  display: flex;
  justify-content: center;
  position: relative;
  /* padding-top: 10%; */
  /* top: -30%; */
  align-items: top;
  opacity: 0.3;
  background-image: ${SmartPhone};
`;
const ImgBox = styled.img``;

function Zepeto() {
  const gifRef = useRef(null);
  useEffect(() => {
    const VideoBox = document.querySelector(".VideoBox");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ImageBox", {
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center-=30%",
        end: "top top",
        pin: true,
        scrub: true,
        // markers: true,
      },
      ease: "none",
      duration: 2,
    });
    gsap.to(".ImageBox", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center+=20%",
        end: "top center",
        markers: true,
      },
      ease: "none",
      duration: 4,
    });
    gsap.to(".ImageBox", {
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center+=30%",
        end: "top top-=40%",
        markers: true,
        onEnter: () => VideoBox.play(),
        onEnterBack: () => VideoBox.play(),
        onLeave: () => VideoBox.pause(),
        onLeaveBack: () => VideoBox.pause(),
      },
      ease: "none",
      duration: 4,
    });
  }, []);

  return (
    <Section>
      <GifBox ref={gifRef} className="ImageBox">
        {/* <img src={SmartPhone} color="black" /> */}
        <video
          src={IciriDemo}
          loop
          muted
          width="80%"
          z-index="5"
          className="VideoBox"
        ></video>
      </GifBox>
    </Section>
  );
}

export default Zepeto;
