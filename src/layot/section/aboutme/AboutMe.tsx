import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Card} from "./card/Card";
import {Container} from "../../../components/Container";

 export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper align={" center"} direction={"column"} >

                        <SectionTitle>About Me</SectionTitle>
                        <Text>I'm an aspiring front-end developer with a huge passion for creating beautiful and functional web pages. I am learning HTML, CSS and JavaScript and am willing to take on any challenge to improve my skills. My goal is to become a skilled developer and create amazing user interfaces. I'm also open to collaborating with other developers and always willing to learn from them. I am very motivated and optimistic about the future!*</Text>

                       <SectionTitle>Education</SectionTitle>
                       <Card speciality={"Automated Control Systems & Electric Drive"}  place={"Kharkov Polytechnic Institute"} period={"Aug 2012 - Dec 2018"} location={"Kharkov"} />
                       <Card speciality={"Front And Developer"} place={"IT_INCUBATOR"} period={"Nov 2023 - today"} location={"Minsk"} />


                </FlexWrapper>
            </Container>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    
  `

const Text = styled.p`

`