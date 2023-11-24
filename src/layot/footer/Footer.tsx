import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

const items = ["Home", "About", "Tech Stack", "Project", "Contact"]
export const Footer:React.FC = () => {
    return (
        <StyledFooter>
            <Container>

                <Copyright>© Designed and built by <span>Sergey Bukreev</span> with <span>Love</span> & <span>Coffee</span></Copyright>

            </Container>

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
background-color: ${Theme.colors.primaryBg};
  
`
const Copyright = styled.small`
  font-family: Poppins, serif;
  font-size: 18px;
  
  
  font-weight: 400;
  line-height: 26px;
  
  color: white;
  span {background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;}
  
  
`