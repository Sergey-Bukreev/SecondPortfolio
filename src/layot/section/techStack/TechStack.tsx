import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";

 export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle>MY Tech Stack</SectionTitle>
                <Text>Technologies I’ve been working with recently</Text>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Icon iconId={"ico1"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico2"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico3"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico4"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico5"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Icon iconId={"ico6"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico7"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico8"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico9"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico10"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                </FlexWrapper>

            </Container>


        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  
`
 export const Text = styled.span`
  text-align: center;
  font-family: Poppins,serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 26px; /* 81.25% */
 display: block;
  margin-bottom: 30px;
`