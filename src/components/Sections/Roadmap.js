import React from "react";
import styled from "styled-components";
const Section = styled.section`
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  width: 100%;
  /* height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* height: 100vh; */
  position: relative;
  background-color: black; // 추후 변경
  padding-top: 10%;
  margin-bottom: 15%;
  /* margin: 10%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const BoxTopLeft = styled.div`
  position: relative;
  /* padding-top: 5%; */
  right: 25%;
`;
const ListBottom = styled.div`
  position: relative;
  /* padding-top: 5%; */
  /* padding-left: 5%; */
`;
const ListItem = styled.div`
  position: relative;
  border-width: 0;
  /* border-bottom: 1px;
  border-color: white;
  border-style: solid; */
  /* padding-top: 5%; */
  /* padding-left: 5%; */
`;
const ListBorder = styled.div`
  position: relative;
  border-width: 1px;
  /* border-bottom: 1px; */
  border-color: white;
  border-style: solid;
  width: 100%;
  /* padding-top: 5%; */
  /* padding-left: 5%; */
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 500px;
  /* width: ; */
  justify-content: space-between;
  padding-top: 5%;
  /* padding-left: 5%; */
`;
const TitleRegular = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
`;
const TitleLight = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 200;
`;
const TitleLightNumber = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 300;
  padding-right: 50px;
`;
const Roadmap = () => {
  return (
    <Section>
      <BoxTopLeft>
        <TitleRegular>To get there,</TitleRegular>
      </BoxTopLeft>
      <List>
        <ListItem>
          <TitleLightNumber>01</TitleLightNumber>
          <TitleLight>GATHER ALL THE ARCHITECTURE</TitleLight>
        </ListItem>
        <ListBorder />
        <ListItem>
          <TitleLightNumber>02</TitleLightNumber>
          <TitleLight>IMPORT ALL THE ARCHITECTURE</TitleLight>
        </ListItem>
        <ListBorder />
        <ListItem>
          <TitleLightNumber>03</TitleLightNumber>
          <TitleLight>DEPLOY ALL THE ARCHITECTURE</TitleLight>
        </ListItem>
        <ListBorder />
        <ListItem>
          <TitleLightNumber>04</TitleLightNumber>
          <TitleLight>SUPPLY ALL THE ARCHITECTURE</TitleLight>
        </ListItem>
      </List>
    </Section>
  );
};

export default Roadmap;
