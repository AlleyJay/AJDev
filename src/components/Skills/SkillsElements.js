import styled from "styled-components";

export const SkillsContainer = styled.div`
  color: #fff;
  background: #9900cc;

  @media screen and(max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SkillsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #22002d;
`;

export const SkillsMe = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #22002d;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const LogoImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const LogoImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
