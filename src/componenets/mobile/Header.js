import React from "react";
import styled from "styled-components";
import { ReactComponent as HamburgerSVG } from "../../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { Logo } from "../styles";

const Header = ({ toggle, setToggle }) => {
  return (
    <Container>
      <StyledLink to={"/"}>
        <Logo>the planets</Logo>
      </StyledLink>
      <StyledHamburgerSVG
        opacity={toggle ? "showPlanets" : "closePlanet"}
        onClick={() => setToggle(!toggle)}
      />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 68px;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
`;

const StyledHamburgerSVG = styled(HamburgerSVG)`
  opacity: ${(props) => (props.opacity === "showPlanets" ? 0.25 : 1)};
  transition: all 0.3s;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
