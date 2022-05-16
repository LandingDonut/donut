import React from "react";
import styled from "styled-components";
import DonutTH from "../../assets/DonutTH.png";
import DonutYH from "../../assets/DonutYH.png";
import DonutJH from "../../assets/DonutJH.png";
const Section = styled.section`
  /* min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  width: 100%;
  /* height: ${(props) => `calc(100vh - ${props.theme.navHeight})`}; */
  /* height: 100vh; */
  position: relative;
  background-color: black; // 추후 변경
  padding-top: 10%;
  /* margin: 10%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const BoxTopLeft = styled.div`
  position: relative;
  /* padding-top: 5%; */

  font-size: ${(props) => props.theme.fontxl};
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
  height: 400px;
  /* padding-top: 5%; */
  /* padding-left: 5%; */
`;

const ListBorderColumn = styled.div`
  position: relative;
  border-width: 1px;
  /* border-bottom: 1px; */
  border-color: white;
  border-style: solid;
  width: 1300px;
  /* padding-top: 5%; */
  /* padding-left: 5%; */
`;
const ListColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 50%;
  /* justify-content: space-between; */
  /* padding-left: 5%; */
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
const TitleRegular = styled.div`
  width: 360px;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 500;
  margin-top: 25px;
`;
const TitleLight = styled.div`
  width: 360px;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 200;
`;
const ProfileBox = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  /* border-bottom: 1px; */
  border-color: white;
  border-style: solid;
  margin-right: 25px;
  margin-left: 25px;
`;
const NameBox = styled.div`
  text-align: left;
  width: 360px;
`;
const TextLightRight = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  text-align: right;
  font-weight: 300;
  margin: 10px;
`;
const TextLightLeft = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  text-align: left;
  font-weight: 300;
  margin: 10px;
`;
const Taem = () => {
  return (
    <Section>
      <BoxTopLeft>Who we are.</BoxTopLeft>

      <ListRow>
        <ListRow>
          <img src={DonutTH} />
          <ListColumn>
            <ListColumn>
              <ProfileBox>
                <TextLightLeft>PREF: </TextLightLeft>
                <TextLightRight>GLAZED</TextLightRight>
              </ProfileBox>
              <ProfileBox>
                <TextLightLeft>ROLE: </TextLightLeft>
                <TextLightRight>CEO</TextLightRight>
              </ProfileBox>
            </ListColumn>
            <TitleRegular>Taepyong</TitleRegular>
            <TitleLight>Taehyun Kim</TitleLight>
          </ListColumn>
        </ListRow>
        <ListBorder />
        <ListRow>
          <img src={DonutYH} />
          <ListColumn>
            <ListColumn>
              <ProfileBox>
                <TextLightLeft>PREF: </TextLightLeft>
                <TextLightRight>WAFFLE</TextLightRight>
              </ProfileBox>
              <ProfileBox>
                <TextLightLeft>ROLE: </TextLightLeft>
                <TextLightRight>TECHNO KING</TextLightRight>
              </ProfileBox>
            </ListColumn>
            <TitleRegular>Jason</TitleRegular>
            <TitleLight>Yonghyun Jeon</TitleLight>
          </ListColumn>
        </ListRow>
      </ListRow>
      <ListBorderColumn />
      <ListRow>
        <ListRow>
          <img src={DonutJH} />
          <ListColumn>
            <ListColumn>
              <ProfileBox>
                <TextLightLeft>PREF: </TextLightLeft>
                <TextLightRight>CHEESE</TextLightRight>
              </ProfileBox>
              <ProfileBox>
                <TextLightLeft>ROLE: </TextLightLeft>
                <TextLightRight>DESIGN LORD</TextLightRight>
              </ProfileBox>
            </ListColumn>
            <TitleRegular>6squarefeet</TitleRegular>
            <TitleLight>Jay Chang</TitleLight>
          </ListColumn>
        </ListRow>
        <ListBorder />
        <ListRow>
          <img src={DonutTH} opacity="0.0" />
          <ListColumn>
            <ListColumn>
              <ProfileBox>
                <TextLightLeft>PREF: </TextLightLeft>
                <TextLightRight>??</TextLightRight>
              </ProfileBox>
              <ProfileBox>
                <TextLightLeft>ROLE: </TextLightLeft>
                <TextLightRight>??</TextLightRight>
              </ProfileBox>
            </ListColumn>
            <TitleRegular>???</TitleRegular>
            <TitleLight>???</TitleLight>
          </ListColumn>
        </ListRow>
      </ListRow>
    </Section>
  );
};

export default Taem;
