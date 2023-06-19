import React from "react";
import styled from "styled-components";
import HeaderDesktop from "../componenets/tablet/HeaderDesktop";
import Planet from "../componenets/global/planet/Planet";

const PageDesktop = ({ data }) => {
  return (
    <Container>
      <HeaderDesktop data={data} />
      <Planet data={data} />
    </Container>
  );
};

export default PageDesktop;

const Container = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
