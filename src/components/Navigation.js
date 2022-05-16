import React from "react";
import styled from "styled-components";
import circleLogo from "./circle1.png";
import SignUpPng from "../assets/SignUp.png";
import { Link } from "react-scroll";
// import "@fontsource/inter";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: sticky;
  top: 0;
  z-index: 7;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  /* height: ${(props) => props.theme.navHeight}; */
  height: 10vh;
  min-height: 100px;
  margin: 0 auto;
`;
const Logo = styled.ul`
  display: flex;
  justify-content: space-between;

  align-items: center;
  list-style: none;
  :hover {
    cursor: pointer;
  }
`;
const LogoItem = styled.li`
  margin: 0 0.5rem;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 700;
`;
const SignUp = styled.button`
  /* font-size: ${(props) => props.theme.fontsm};
  /* font-weight: 100;
  border-radius: 20%; */
  width: 100px;
  background-color: black;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

// ${props=>props.theme.fontsemibold}
const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Link to="Home" spy={true} smooth={true} offset={0} duration={1200}>
          <Logo>
            <LogoItem>
              <img src={circleLogo} width={75} height={75} />
            </LogoItem>
            <LogoItem>DONUT</LogoItem>
          </Logo>
        </Link>

        <SignUp>
          <img src={SignUpPng} width={85} />
        </SignUp>
      </NavBar>
    </Section>
  );
};

export default Navigation;
