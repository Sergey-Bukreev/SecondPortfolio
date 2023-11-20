import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu";
import {Theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
const items = ["Home", "About", "Tech Stack", "Project", "Contact"]
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

                <Copyright>© 2023 Sergey Bukreev, All Rights Reserved.</Copyright>

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
  
  background:${Theme.colors.fontSecond};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`