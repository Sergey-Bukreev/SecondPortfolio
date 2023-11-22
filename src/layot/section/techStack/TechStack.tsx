import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";

 export const TechStack:React.FC = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle>MY Tech Stack</SectionTitle>
                <Text>Technologies I’ve been working with recently</Text>
                    <Icons>
                        <Icon iconId={"ico1"} width={"88px"} height={"88px"} viewBox={"0, 0, 88, 88"}/>
                        <Icon iconId={"ico2"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                        <Icon iconId={"ico3"} width={"88px"} height={"88px"} viewBox={"0, 0, 88, 88"}/>
                        <Icon iconId={"ico4"} width={"105px"} height={"105px"} viewBox={"0, 0, 105, 105"}/>
                        <Icon iconId={"ico5"} width={"112px"} height={"100px"} viewBox={"0, 0, 112, 100"}/>


                        <Icon iconId={"ico6"} width={"118px"} height={"88px"} viewBox={"0, 0, 118, 88"}/>
                        <Icon iconId={"ico7"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                        <Icon iconId={"ico8"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                        <Icon iconId={"ico9"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                        <Icon iconId={"ico10"} width={"130px"} height={"130px"} viewBox={"0, 0, 130, 130"}/>
                    </Icons>



            </Container>


        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  
`
 export const Text = styled.p`
  text-align: center;
  font-family: Poppins,serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 26px; /* 81.25% */
 display: block;
  margin-bottom: 30px;
   
`
const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  grid-gap: 20px;
  grid-auto-flow: row;
  align-items: center; 
  justify-items: center;
  
  @media ${Theme.media.tablet} {
    
    grid-template-columns: repeat(2, 1fr);
    
  }
`