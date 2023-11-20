import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Icon} from "../../components/icon/Icon";
import {MobileMenu} from "./MobileMenu/MobileMenu";
import {Theme} from "../../styles/Theme";


const items = ["Home", "About", "Tech Stack", "Project", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>

                <FlexWrapper justify={"space-around"} align={"center"}  >

                    <HeaderMenu menuItems={items} />
                    <MobileMenu menuItems={items} />
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"github"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"}  />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"twitter"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"linkd"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"} />
                            </SocialLink>
                        </SocialItem>
                    </SocialList>

                </FlexWrapper>



            </Container>

        </StyledHeader>
    );
};

const StyledHeader=styled.header`
  background: rgba(31, 31, 32, 0.9) ;
  padding: 20px 0;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 99999;
 
`
 export const SocialList = styled.ul`
  display: flex;
  gap: 20px;
   

   @media ${Theme.media.tablet} {
  display: none;
     
}
 `
export const SocialItem = styled.li`
 
`
 export const SocialLink = styled.a`
  border-radius: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.3);
  }
 `