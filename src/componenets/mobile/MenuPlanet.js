import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChevronSVG } from "../../assets/icon-chevron.svg";
import { getColor } from "../functions";

const MenuPlanet = ({ data, setToggle }) => {
  return (
    <Container>
      {data.map((planet, index) => {
        const { name } = planet;
        return (
          <StyledLink
            to={`/${name}`}
            key={name}
            onClick={() => setToggle(false)}
          >
            <NameContainer>
              <Circle color={getColor(name)}></Circle>
              <PlanetName>{name}</PlanetName>
            </NameContainer>
            <StyledChevronSVG />
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default MenuPlanet;

const Container = styled.div`
  padding: 24px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  color: #fff;

  &:last-child {
    border: none;
  }

  &.active {
    opacity: 0.5;
  }
`;

const NameContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const PlanetName = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;

  letter-spacing: 1.36364px;
  text-transform: uppercase;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const StyledChevronSVG = styled(ChevronSVG)`
  margin-right: 8px;
`;
