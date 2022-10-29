import React from "react";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Col1,
  Heading,
  SkillsMe,
  Col2,
  LogoImgWrapper,
  LogoImg,
} from "./SkillsElements";
import AJLogo from "../../assets/images/Logo-02.png";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsWrapper>
          <SkillsRow>
            <Col1>
              <Heading>Skills </Heading>
              <SkillsMe>Here's some skills I have</SkillsMe>
            </Col1>
            <Col2>
              <LogoImgWrapper>
                <LogoImg src={AJLogo} />
              </LogoImgWrapper>
            </Col2>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
