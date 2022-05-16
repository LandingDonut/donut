import React from "react";
import styled from "styled-components";
import JoinNow from "../../assets/JoinNow.png";
import circleLogo from "../circle1.png";
import { Link } from "react-scroll";
const Section = styled.section`
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* width: 90%;
  margin-left: 5%; */
  /* max-width: 2000px; */
  /* height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* height: 100vh; */
  position: relative;
  background-color: black; // 추후 변경
  padding-top: 15%;
  /* margin: 10%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-self: center; */
  justify-content: space-between;
`;
const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 1300px;
  justify-content: space-between;
  /* padding-left: 5%; */
`;
const ListColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  /* align-items: center; */
  height: 70%;
  /* justify-content: space-between; */
  /* padding-left: 5%; */
`;
const ListGrid = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100vw;
  min-width: 2000px;
  margin-top: 10%;
  /* justify-content: space-between; */
`;
const JoinButton = styled.button`
  /* font-size: ${(props) => props.theme.fontsm};
  /* font-weight: 100;
  border-radius: 20%; */
  /* width: 100px; */
  background-color: black;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
const TitleExLarge = styled.div`
  /* width: 360px; */
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
  /* margin-top: 25px; */
`;
const TitleLarge = styled.a`
  /* width: 360px; */
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  justify-items: center;
  text-align: center;
  padding: 40px;
  height: 200px;
  width: 400px;
  text-decoration: none;
  color: white;

  /* margin-top: 25px; */
`;
const TitleLorem = styled.div`
  /* width: 360px; */
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  padding: 40px;
  width: calc(60% - 600px);
  height: 200px;
  /* margin-top: 25px; */
`;
const PaddingDiv = styled.div`
  border-width: 1px;
  border-color: white;
  border-style: solid;
  padding: 40px;
  width: calc(50% - 600px);
  height: 200px;
`;
const TextBoldLeft = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  text-align: left;
  font-weight: 700;
  margin: 10px;
  /* margin: 10px; */
`;
const TextLightLeft = styled.div`
  font-size: ${(props) => props.theme.fontmd};
  text-align: left;
  font-weight: 200;
  /* margin: 10px; */
`;
const EmailAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 100px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 400;
  text-align: left;
  margin-top: 20px;
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
function SayHello() {
  return (
    <Section>
      <ListRow>
        <TitleExLarge>Say Hello!</TitleExLarge>
        <ListColumn>
          <TextBoldLeft>-COME FOR A COFFE</TextBoldLeft>
          <TextLightLeft>Seongsu-2ga, Seoul, Korea</TextLightLeft>
        </ListColumn>
        <ListColumn>
          <TextBoldLeft>-START SOMETHING FUN WITH US</TextBoldLeft>
          <TextLightLeft>hello@donut.bz</TextLightLeft>
          <EmailAddress>
            Enter your email address
            <JoinButton>
              <img src={JoinNow}></img>
            </JoinButton>
          </EmailAddress>
        </ListColumn>
      </ListRow>
      <ListGrid>
        {/* <PaddingDiv></PaddingDiv> */}
        <ListColumn>
          <TitleLarge href="https://google.com" target="_blank">
            INSTAGRAM
          </TitleLarge>
          <TitleLarge href="https://google.com" target="_blank">
            OPENSEA
          </TitleLarge>
        </ListColumn>
        <ListColumn>
          <TitleLarge href="https://google.com" target="_blank">
            DISCORD
          </TitleLarge>
          <TitleLarge href="https://google.com" target="_blank">
            GITHUB
          </TitleLarge>
        </ListColumn>
        <TitleLorem>Lorem Ipsum</TitleLorem>
      </ListGrid>
      <Link to="Home" spy={true} smooth={true} offset={-100} duration={1200}>
        <Logo>
          <LogoItem>
            <img src={circleLogo} width={75} height={75} />
          </LogoItem>
          <LogoItem>DONUT</LogoItem>
        </Logo>
      </Link>
    </Section>
  );
}

export default SayHello;
