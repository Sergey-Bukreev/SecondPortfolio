import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SocialItem, SocialLink, SocialList} from "../../header/Header";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
           <Container>
               <Title>For any questions please mail me:</Title>
               <ContactLink>bukreevwork2@gmail.com</ContactLink>
               <div></div>

               <FlexWrapper align={"flex-end"} justify={"space-around"}>
                   <Name>Sergey Bukreev</Name>

                   <ContactLinkSmall>+91 12345 09876</ContactLinkSmall>
                   <ContactLinkSmall href={"https://instagram.com/bukreev94?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"}>instagram.com/bukreev94</ContactLinkSmall>

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
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
div {
  margin-bottom: 140px;
}
`
const Title = styled.h2`
  font-family: DM Sans, serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
`
const ContactLink = styled.a`
  font-family: DM Sans, serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  background:${Theme.colors.fontSecond};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`
const ContactLinkSmall = styled.a`
  font-family: DM Sans, serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  margin-right: 20px;

  &:hover {
    background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;


`
const  Name = styled.p`
  font-family: DM Sans, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  margin-right: 20px;
  background:${Theme.colors.fontSecond};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`