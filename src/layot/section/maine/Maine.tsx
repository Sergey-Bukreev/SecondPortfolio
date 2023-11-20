import React from 'react';
import styled from "styled-components";
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Maine = () => {
    return (
        <StyledMaine>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap-reverse"}>
                    <div>
                        <Text>Hi There</Text>
                        <Text>My name is <span>Sergey Bukreev</span></Text>
                        <Text>I build things for WEB</Text>
                    </div>
                    <PhotoWrapper>
                        <Photo src={MainePhoto}/>
                    </PhotoWrapper>



                </FlexWrapper>
            </Container>

        </StyledMaine>
    );
};


const StyledMaine = styled.section`
  min-height: 60vh;
  background-color: snow;
  display: flex;
  
 
`

const PhotoWrapper = styled.div`
  background: -webkit-linear-gradient(left top, #360dde 0%, #0dbad7 100%);
  width: 370px;
  height: 370px;
  border-radius: 50%;
  padding: 10px;

  @media ${Theme.media.tablet} {
    width: 270px;
    height: 270px;
  }
`


const Photo = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
 
  @media ${Theme.media.tablet} {
    width: 250px;
    height: 250px;
   
  }
`

const Text = styled.h2`
  ${font({family:"Poppins,serif", weight:400, Fmax:38, Fmin:24})}
 
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  @media ${Theme.media.tablet} {
    line-height: 50px;
  }
  span {
    background: linear-gradient(to left, #360dde, #0dbad7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

