import { ThemeProvider } from "styled-components";
//import {Navigation} from 'swiper';
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Roadmap from "./components/Sections/Roadmap";
import Team from "./components/Sections/Taem";
import Zepeto from "./components/Sections/Zepeto";
import MoreAbout from "./components/Sections/MoreAbout";
import SayHello from "./components/Sections/SayHello";

// import './App.css';
// const BodySection = styled.div`
//   width: 70%;
//   height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
//   /* height:100vh; */
//   min-width: 1000px;
//   max-width: 3000px;
//   //flex-Direction: column;
//   //justify-content: space-between;
//   //align-items: center;
//   margin-left: 15%;
//   /* scroll-behavior: smooth; */
//   /* scroll-snap-type: y mandatory; */
//   //scroll-padding-top:10px;

//   //scroll-snap-stop: always;
//   /* overflow-y: auto; */
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

const DIVIDER_HEIGHT = 5;
function App() {
  // gsap.registerPlugin(ScrollTrigger);

  // const scenes = gsap.utils.toArray(".scene");

  // // Pinned scene
  // // scenes.forEach((scene, i) => {
  // //   ScrollTrigger.create({
  // //     trigger: scene,
  // //     scrub: true,
  // //     pin: true,
  // //     id: `scene-${i}`,
  // //     start: "top top",
  // //     end: "+=100%",
  // //     // snap: 1 / (scenes.length * 2 - 1),
  // //   });
  // //   console.log("gogo");
  // // });
  // const snap = gsap.utils.snap([0, 0.4, 0.6, 1]);

  // ScrollTrigger.create({
  //   start: 0,
  //   end: "max",
  //   //snap: [0, 0.2, 0.4, 0.6, 0.8, 1]
  //   //snap: 1/(scenes.length * 2 - 1)
  //   snap: (value) => {
  //     const snapped = snap(value);
  //     if ((snapped * 10) % (0.4 * 10) === 0) {
  //       console.log("down fixed");
  //       console.log(snapped);
  //       return snapped + 0.0002;
  //     }
  //     if (
  //       (snapped * 10) % (0.4 * 10) !== 0 &&
  //       (snapped * 10) % (0.2 * 10) === 0
  //     ) {
  //       console.log("up fixed");
  //       console.log(snapped);
  //       return snapped - 0.0002;
  //     }
  //     console.log(snapped, "problem");
  //     return snapped;
  //   },
  // });
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navigation />
        <Home />
        <About />
        <Zepeto />
        <MoreAbout />
        <Roadmap />
        <Team />
        <SayHello />
      </ThemeProvider>
    </>
  );
}
export default App;
