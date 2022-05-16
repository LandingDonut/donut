import React, { useEffect } from "react";
import gsap from "gsap";
import About from "./About";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import styled from "styled-components";

// const Section = styled.section`
//   min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
//   height: ${(props) => `calc(200vh - ${props.theme.navHeight})`};
//   /* height: 100vh; */
//   width: 100%;
//   background-color: black; // 추후 변경
//   position: relative;
//   scroll-snap-align: start;
//   scroll-snap-stop: always;
// `;
function Carousel() {
  useEffect(() => {
    const divs = document.querySelectorAll(".test");
    // gsap
    //   .timeline({ repeat: -1, defaults: { duration: 3 } })
    //   .add("one")
    //   .to(divs[0], { y: 600, x: 0, opacity: 0.05 }, "one")
    //   .to(divs[1], { y: -350, x: 0, opacity: 0.05 }, "one")
    //   .to(divs[2], { y: -450, x: 100, opacity: 1 }, "one")
    //   .add("two")
    //   .to(divs[0], { y: 300, x: 100, opacity: 1 }, "two")
    //   .to(divs[1], { y: 300, x: 0, opacity: 0.05 }, "two")
    //   .to(divs[2], { y: -600, x: 0, opacity: 0.05 }, "two")
    //   .add("three")
    //   .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
    //   .to(divs[1], { y: 0, x: 100, opacity: 1 }, "three")
    //   .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three");

    // gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".test");

    // gsap.to(sections, {
    //   yPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".test",
    //     pin: true,
    //     scrub: 1,
    //     //snap: 1 / (sections.length - 1),
    //     end: "+=1500",
    //   },
    // });
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // let sections = gsap.utils.toArray(".panel");

    function goToSection(i) {
      gsap.to(window, {
        scrollTo: {
          y: (i + 1) * window.innerHeight,
          autoKill: false,
          ease: "Power3.easeInOut",
        },
        duration: 0.85,
      });
    }

    ScrollTrigger.defaults({
      // markers: true
    });

    sections.forEach((eachPanel, i) => {
      // const mainAnim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i),
      });

      ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      });
    });
  });
  return (
    <div className="test">
      <About />
      <About />
      <About />
    </div>
  );
}

export default Carousel;
