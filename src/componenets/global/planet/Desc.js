import React from "react";
import styled from "styled-components";
import { ReactComponent as IconSource } from "../../../assets/icon-source.svg";
import { getPlanetInfo } from "../../functions";

const Desc = ({ planet, section }) => {
  return (
    <Container>
      <Name>{planet.name}</Name>
      <Info>{getPlanetInfo(planet, section).content}</Info>
      <SourceContainer>
        <Span>Source: </Span>
        <SourceLink
          href={getPlanetInfo(planet, section).source}
          target="_blank"
        >
          Wikipedia
        </SourceLink>
        <IconSource />
      </SourceContainer>
    </Container>
  );
};

export default Desc;

const Container = styled.section`
  padding: 0 24px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-area: desc;
    align-items: flex-start;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    margin: 126px 0 39px 0;
  }
`;

const Name = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;

  margin-bottom: 16px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 23px;
    font-size: 80px;
    line-height: 104px;
  }
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  margin-bottom: 10px;
  max-width: 500px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
    margin-bottom: 32px;
    max-width: unset;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 24px;
  }
`;

/* Wikipedia Source  styles */
const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  opacity: 0.5;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const Span = styled.span``;

const SourceLink = styled.a`
  font-weight: 700;
  color: inherit;
  text-decoration: underline;
`;
