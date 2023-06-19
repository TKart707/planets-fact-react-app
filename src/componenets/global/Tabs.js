import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Tabs = ({ section, setSection, color }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const haddleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", haddleWindowResize);

    return () => {
      window.removeEventListener("resize", haddleWindowResize);
    };
  }, []);

  const sectionTitles = ["overview", "structure", "geology"];
  const resizeSectionTitles = [
    "overview",
    "Internal Structure",
    "Surface Geology",
  ];
  return (
    <Container>
      {sectionTitles.map((title, index) => {
        return (
          <NavTitle
            onClick={() => setSection(title)}
            isActive={section === title ? true : false}
            color={color}
            key={title}
          >
            {screenWidth >= 768 ? (
              <>
                <SpanIndex>{`0${index + 1}`}</SpanIndex>
                <Span>{resizeSectionTitles[index]}</Span>
              </>
            ) : (
              <Span>{title}</Span>
            )}
          </NavTitle>
        );
      })}
    </Container>
  );
};

export default Tabs;

const Container = styled.section`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 768px) {
    grid-area: nav;
    padding: 0;

    flex-direction: column;
    gap: 16px;
    align-self: center;
    align-items: flex-end;
  }

  @media screen and (min-width: 1024px) {
    align-self: start;
    align-items: stretch;
  }
`;

const NavTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;

  letter-spacing: 1.92857px;
  text-transform: uppercase;

  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  text-decoration-color: ${({ color }) => color};
  text-decoration-thickness: 4px;
  text-underline-offset: 20px;

  opacity: ${(props) => (props.isActive ? 1 : 0.5)};

  cursor: pointer;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    text-decoration: none;
    opacity: 1;
    line-height: 25px;

    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${(props) => (props.isActive ? props.color : "none")};

    width: 281px;
    padding: 8px 0 7px 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57143px;

    width: unset;
    padding: 12px 0 11px 28px;
  }
`;

const SpanIndex = styled.span`
  margin-right: 17px;
  opacity: 0.5;

  @media screen and (min-width: 1024px) {
    margin-right: 28px;
  }
`;

const Span = styled.span``;
