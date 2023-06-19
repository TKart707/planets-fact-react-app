import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../styles";
import { getColor } from "../functions";

const HeaderDesktop = ({ data }) => {
  return (
    <Container>
      <StyledLink to="/">
        <Logo>the planets</Logo>
      </StyledLink>
      <NavUnlisted>
        {data.map((planet) => {
          return (
            <StyledNavLink
              key={planet.name}
              to={`/${planet.name}`}
              color={getColor(planet.name)}
            >
              <Li>{planet.name}</Li>
            </StyledNavLink>
          );
        })}
      </NavUnlisted>
    </Container>
  );
};

export default HeaderDesktop;

const Container = styled.div`
  padding: 32px 53px 27px 51px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  display: flex;
  flex-direction: column;
  gap: 39px;

  @media screen and (min-width: 1024px) {
    padding: 22px 41px 27px 32px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1367px;
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-align: center;
`;

const NavUnlisted = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    gap: 33px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  @media screen and (min-width: 1024px) {
    li {
      opacity: 0.75;
    }

    &.active {
      li {
        text-decoration: underline;
        text-decoration-color: ${(props) => props.color};
        text-decoration-thickness: 4px;
        text-underline-offset: -43px;
        opacity: 1;
      }
    }
  }
`;

const Li = styled.li`
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;

  letter-spacing: 1px;
  text-transform: uppercase;
`;
