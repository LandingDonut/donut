import React from "react";
import styled from "styled-components";
const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  /* height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* height: 100vh; */
  position: relative;
  /* background-color: black; // 추후 변경 */
  padding-top: 10%;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  margin: 10%;
  /* background-color: black; // 추후 변경 */
  display: flex;
  flex-direction: column;
`;
const TitleLight = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 200;
`;
const TitleBold = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
`;
const TitleLightRight = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 200;
  text-align: right;
`;
const TitleBoldRight = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
  text-align: right;
`;
const BoxLeft = styled.div`
  width: 70%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  padding-right: 10%;
  padding-top: 20%;
`;
const BoxRight = styled.div`
  width: 70%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  padding-left: 10%;
  padding-top: 10%;
  text-align: right;
`;
const MoreAbout = () => {
  return (
    <Section>
      <Container>
        <BoxLeft>
          <TitleLight>In</TitleLight>
          <TitleBold> 2022</TitleBold>
          <TitleLight>
            , we asked ourselves, what will be the next phase in the metaverse?
            we realised, it wll be the
          </TitleLight>
          <TitleBold> democratiztion</TitleBold>
          <TitleLight> of spatial experience though </TitleLight>
          <TitleBold> Web3</TitleBold>
        </BoxLeft>
        <BoxRight>
          <TitleLightRight> We aim to make it</TitleLightRight>
          <TitleBoldRight> easier for everyone</TitleBoldRight>
          <TitleLightRight>
            {" "}
            to bring forward their creation to the world,
          </TitleLightRight>
          <TitleBoldRight> borderless</TitleBoldRight>
          <TitleLightRight> and</TitleLightRight>
          <TitleBoldRight> effortless</TitleBoldRight>
          <TitleLightRight>
            {" "}
            ,easy to be deployed and experienced
          </TitleLightRight>
        </BoxRight>
      </Container>
    </Section>
  );
};

export default MoreAbout;
