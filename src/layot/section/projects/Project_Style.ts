import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const Projects = styled.section`


`
const ProjectCard = styled.div`
  background-color:${Theme.colors.secondaryBg};
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  max-width: 374px;
  width: 100%;
  height: 567px;
  flex-shrink: 0;
  margin: 10px;
  display: flex;
  flex-direction: column;

 & > * {
   margin-bottom: 10px;
 }

`
const ProjectImage = styled.img`
  max-width: 374px;
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
`
const ProjectTitle = styled.h3`
  text-align: center;
  font-family: Poppins, serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px; /* 92.857% */
`
const ProjectDescription = styled.span`
  font-family: Poppins, serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px; /* 144.444% */
  text-align: left;
  padding: 0 5px;
  
  
`
const LinkProject = styled.a`
  font-family: Poppins, serif;
  font-size: 16px;
  margin-right: 20px;
  margin-left: 5px;
  
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  text-decoration-line: underline;

  &:hover {
    background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    
`

export const S = {
    Projects,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    ProjectDescription,
    LinkProject
}