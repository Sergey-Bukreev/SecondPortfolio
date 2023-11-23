import React from 'react';
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Maine_Styles"



export const Maine = () => {
    return (
        <S.Maine>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap-reverse"}>
                    <div>
                        <S.Text>Hi There</S.Text>
                        <S.Text>My name is <span>Sergey Bukreev</span></S.Text>
                        <S.MaineText>I build things for WEB</S.MaineText>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={MainePhoto}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.Maine>
    );
};



