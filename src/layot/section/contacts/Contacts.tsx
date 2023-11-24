import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SocialList} from "../../header/socialList/SocialList";
import {S} from "./Contacts_Style"

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
           <Container>
               <S.Title>For any questions please mail me:</S.Title>
               <S.ContactLink>bukreevwork2@gmail.com</S.ContactLink>
               <div></div>

               <FlexWrapper align={"flex-end"} justify={"space-around"} wrap={"wrap"}>
                   <S.Name>Sergey Bukreev</S.Name>

                   <S.ContactLinkSmall>+91 12345 09876</S.ContactLinkSmall>
                   <S.ContactLinkSmall href={"https://instagram.com/bukreev94?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"}>instagram.com/bukreev94</S.ContactLinkSmall>
                    <SocialList />


               </FlexWrapper>
           </Container>
        </S.Contacts>
    );
};

