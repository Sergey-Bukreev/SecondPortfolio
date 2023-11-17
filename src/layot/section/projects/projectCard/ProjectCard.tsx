import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";


import {Theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectCardPropsType = {
    title: string
    text: string
    src: string
}
export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>

                <ProjectImage src={props.src}/>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.text}</ProjectDescription>
                    <FlexWrapper align={"flex-end"}>
                        <Icon iconId={"Group"}  width={"20px"} height={"20px"} viewBox={"0, 0, 20, 20"}/>
                        <LinkProject>Live Preview</LinkProject>
                        <Icon iconId={"code"}  width={"20px"} height={"20px"} viewBox={"0, 0, 20, 20"}/>
                        <LinkProject>View Code</LinkProject>
                    </FlexWrapper>



        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
  background-color:${Theme.colors.secondaryBg};
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  width: 374px;
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
  width: 374px;
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