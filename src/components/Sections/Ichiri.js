import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import SmartPhone from "../../assets/smartphone.png";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import IciriDemo from "../../assets/iPhoneUI272.mp4";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})*2`};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;
`;
const GifBox = styled.div`
  /* width: 60%; */
  /* height: 100%; */
  width: 60%;
  min-width: 1500px;
  margin-top: 40%;
  background-color: transparent;
  z-index: 5;
  justify-content: center;
  display: flex;
  position: relative;
  align-items: top;
  opacity: 0.3;
`;

function Ichiri() {
  const gifRef = useRef(null);
  useEffect(() => {
    const VideoBox = document.querySelector(".VideoBox");
    const ImageBox = document.querySelector(".ImageBox");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ImageBox", {
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center-=15%",
        end: "top top+=10%",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
        toggleClass: "on",
        onToggle: (scrollTrigger) => scrollTrigger.refresh(),
      },
      ease: "none",
      duration: 2,
    });
    // gsap.to(".VideoBox", {
    //   scrollTrigger: {
    //     trigger: VideoBox,
    //     toggleClass: "on",
    //     onToggle: (scrollTrigger) => scrollTrigger.refresh(),
    //   },
    // });
    gsap.to(".ImageBox", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center+=20%",
        end: "top center",
        // markers: true,
      },
      ease: "none",
      duration: 4,
    });
    gsap.to(".ImageBox", {
      scrollTrigger: {
        trigger: VideoBox,
        start: "top center+=30%",
        end: "top top-=20%",
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

export default Ichiri;
