import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


const Projects = styled.section`


`
const ProjectCard = styled.div`
  background-color:${Theme.colors.secondaryBg};
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  max-width: 376px;
  max-height: 600px;
  
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 

 & > * {
   margin-bottom: 10px;
  }
  @media ${Theme.media.mobile} {
    max-height: 600px;
    width: 90%;
    
  }

`
const ProjectImage = styled.img`
  max-width: 374px;
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
`
const ProjectDescription = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px; /* 144.444% */
  text-align: left;
  padding: 10px;
  
 
  
  
`
const ProjectTitle = styled.h3`
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px; /* 92.857% */
`
const Text = styled.p`
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 26px; /* 81.25% */
  display: block;
  margin-bottom: 30px;
`
const LinkProject = styled.a`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  margin-right: 30px;
  padding-left: 5px;
  
 
  
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
    LinkProject,
    Text,

}