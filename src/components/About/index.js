import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Col1,
  Heading,
  AboutMe,
  Col2,
  LogoImgWrapper,
  LogoImg,
} from "./AboutElements";
import AJLogo from "../../assets/images/Logo-02.png";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Col1>
              <Heading>About Me</Heading>
              <AboutMe>Here's some stuff about me</AboutMe>
            </Col1>
            <Col2>
              <LogoImgWrapper>
                <LogoImg src={AJLogo} />
              </LogoImgWrapper>
            </Col2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
