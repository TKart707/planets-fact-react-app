import React, { useState } from "react";
import styled from "styled-components";
import Header from "../componenets/mobile/Header";
import MenuPlanet from "../componenets/mobile/MenuPlanet";
import Planet from "../componenets/global/planet/Planet";

const PageMobile = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Header toggle={toggle} setToggle={setToggle} />
      {toggle ? (
        <MenuPlanet data={data} setToggle={setToggle} />
      ) : (
        <Planet data={data} />
      )}
    </Container>
  );
};

export default PageMobile;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
