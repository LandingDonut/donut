import { ThemeProvider } from "styled-components";
//import {Navigation} from 'swiper';
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Roadmap from "./components/Sections/Roadmap";
import Team from "./components/Sections/Taem";
import Zepeto from "./components/Sections/Zepeto";
import Ichiri from "./components/Sections/Ichiri";
import MoreAbout from "./components/Sections/MoreAbout";
import SayHello from "./components/Sections/SayHello";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import CoverDonut from "./components/CoverDonut";

const DIVIDER_HEIGHT = 5;
function App() {
  const Box = styled.div`
    width: 100%;
    height: 50%;
    max-width: 800px;
    justify-content: center;
    align-items: center;
    /* z-index: 2;
    position: absolute;
    left: 10%;
    top: 20%; */
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

  const ZoomInSection = batch(Sticky(), Fade(0, 1), ZoomIn(0.5, 1));
  const ZoomDonut = batch(Sticky(), Fade(0, 1), Zoom(5, 0.5));
  const MoveoutText = batch(Sticky(50, 25), Fade(0, 1), MoveOut(0, -400));
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navigation />
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={ZoomDonut}>
              <CoverDonut />
            </Animator>
            <Animator animation={MoveoutText}>
              <Home />
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}></ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={ZoomInSection}>
              <Animator>
                <About />
              </Animator>
            </Animator>
          </ScrollPage>
          {/* <ScrollPage page={3}>
            <Animator animation={ZoomInSection}></Animator>
          </ScrollPage> */}
        </ScrollContainer>
        <Ichiri />
        <MoreAbout />
        <Roadmap />
        <Team />
        <SayHello />
      </ThemeProvider>
    </>
  );
}
export default App;