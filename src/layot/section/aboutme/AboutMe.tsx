import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";

 export const AboutMe:React.FC = () => {
    return (
        <StyledAboutMe id={"about"}>
            <Container>
                <FlexWrapper align={" center"} direction={"column"} >
                    <SectionTitle>About Me</SectionTitle>
                    <Text>I'm an aspiring front-end developer with a huge passion for creating beautiful and functional web pages. I am learning HTML, CSS and JavaScript and am willing to take on any challenge to improve my skills. My goal is to become a skilled developer and create amazing user interfaces. I'm also open to collaborating with other developers and always willing to learn from them. I am very motivated and optimistic about the future!*</Text>
                </FlexWrapper>
            </Container>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    
  `

const Text = styled.p`
${font({family: "Poppins, Sans-serif", weight:400, Fmax:20, Fmin:14, lineHeight:1.6})}
`