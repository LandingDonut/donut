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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdaKXVSGx-0EsQffwOTsZ8busQ1wYbGU4",
  authDomain: "donutlandingpage.firebaseapp.com",
  projectId: "donutlandingpage",
  storageBucket: "donutlandingpage.appspot.com",
  messagingSenderId: "4739613659",
  appId: "1:4739613659:web:9234436a4b29bc3e2fddfe",
  measurementId: "G-PCYSM0ZPGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
  const tempBox = styled.div`
    width: 100px;
    height: 100px;
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
  const IchiriSection = batch(Zoom(0.7, 1));
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navigation />
        <ScrollContainer snap="none">
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
