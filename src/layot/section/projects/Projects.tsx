import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Text} from "../techStack/TechStack";
import {ProjectCard} from "./projectCard/ProjectCard";
import PhotoProject1 from "./../../../assets/images/PhotoProject1.webp"
import PhotoProject2 from "./../../../assets/images/PhotoProject2.webp"
import PhotoProject3 from "./../../../assets/images/PhotoProject3.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Text>Things I’ve built so far</Text>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} align={"center"} >
                    <ProjectCard  title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={PhotoProject1}/>
                    <ProjectCard  title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={PhotoProject2} />
                    <ProjectCard title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={PhotoProject3} />

                </FlexWrapper>

            </Container>


        </StyledProjects>
    );
};

const StyledProjects = styled.section`


`