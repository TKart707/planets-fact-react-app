import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Tabs from "../Tabs";
import Desc from "./Desc";
import Info from "./Info";
import Images from "./Images";
import { getColor } from "../../functions";

const Planet = ({ data }) => {
  const [section, setSection] = useState("overview");
  const { planetName } = useParams();

  const planet = planetName
    ? data.filter((planetObj) => planetObj.name === planetName)[0]
    : data[0];

  return (
    <MainSection>
      <Container>
        <Tabs
          section={section}
          setSection={setSection}
          color={getColor(planet.name)}
          data={data}
        />
        <Images planet={planet} section={section} />
        <Desc planet={planet} section={section} />
        <Info planet={planet} />
      </Container>
    </MainSection>
  );
};

export default Planet;

const MainSection = styled.section`
  @media screen and (min-width: 768px) {
    padding: 0 40px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 56px;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 460px auto auto;
    grid-template-areas:
      "img img"
      "desc nav"
      "stat stat";
  }

  @media screen and (min-width: 1024px) {
    max-width: 1110px;
    margin: 0 auto;
    grid-template-columns: 2.2fr 1fr;
    // grid-template-rows: 1fr 1fr auto;
    grid-template-areas:
      "img desc"
      "img nav"
      "stat stat";
  }
`;


