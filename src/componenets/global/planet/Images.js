import React from "react";
import styled from "styled-components";
import { getImgPath } from "../../functions";

const Images = ({ planet, section }) => {
  return (
    <Container>
      <Img src={process.env.PUBLIC_URL + getImgPath(planet, section)} alt="" />
      <ImgGeology
        src={process.env.PUBLIC_URL + planet.images.geology}
        alt=""
        isVisible={section === "geology" ? true : false}
      />
    </Container>
  );
};

export default Images;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-area: img;
  }

  @media screen and (min-width: 1024px) {
    grid-area: img;
    // max-height: 754px;
    // align-self: stretch;
  }
`;

const ImgGeology = styled.img`
  position: absolute;
  width: 60px;
  bottom: 20%;
  left: calc(50% - 30px);

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  @media screen and (min-width: 768px) {
    width: 90px;
    bottom: 20%;
    left: calc(50% - 45px);
  }

  @media screen and (min-width: 1024px) {
    width: 120px;
    bottom: 20%;
    left: calc(50% - 60px);
  }
`;

const Img = styled.img`
  transform: scale(0.38);

  @media screen and (min-width: 768px) {
    transform: scale(0.63);
  }

  @media screen and (min-width: 1024px) {
    transform: scale(1);
  }
`;
