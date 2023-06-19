import React from "react";
import styled from "styled-components";

const Info = ({ planet }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>rotation time</Title>
        <Value>{planet.rotation}</Value>
      </TitleContainer>
      <TitleContainer>
        <Title>revolution time</Title>
        <Value>{planet.revolution}</Value>
      </TitleContainer>
      <TitleContainer>
        <Title>radius</Title>
        <Value>{planet.radius}</Value>
      </TitleContainer>
      <TitleContainer>
        <Title>average temp.</Title>
        <Value>{planet.temperature}</Value>
      </TitleContainer>
    </Container>
  );
};

export default Info;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 0 24px 48px 24px;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-area: stat;
    flex-direction: row;
    gap: 11px;

    max-width: unset;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    gap: 30px;
    padding-top: 87px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 48px;
  padding: 0 24px;
  border: 1px solid ${({ theme }) => theme.colors.borderBottom};

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    flex-grow: 1;

    padding: 16px 0 19px 15px;
    height: unset;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 0 27px 23px;
    gap: 4px;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  opacity: 0.5;
  text-transform: uppercase;
  @media screen and (min-width: 1024px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;

const Value = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
  }
`;
