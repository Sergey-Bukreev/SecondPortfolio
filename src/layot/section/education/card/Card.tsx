import React from 'react';
import styled from "styled-components";

import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {Theme} from "../../../../styles/Theme";
type CardPropsType ={
    speciality: string
   location: string
    place: string
    period: string
}

 export const Card = (props:CardPropsType) => {
    return (
        <StyledCard>

                <Speciality>{props.speciality}</Speciality>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"} >
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <Place>{props.place}</Place>

                    <Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <Location>{props.location}</Location>
                </FlexWrapper>

                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                     <Date>{props.period}</Date>
                </FlexWrapper>

            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 8px;
  padding: 16px;
  align-items: center;
  
  width: 80%;
  margin: 0 auto;
 

  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    bottom: -1px;
    
    @media ${Theme.media.mobile} {
    bottom: -18px;
    }
  }
    
  
`
const Speciality = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-family: Poppins, serif;
  font-weight: 400;
  line-height: 28px;
`

const Place = styled.p`
  font-size: 12px;
  margin-right: 20px;
`
const Location = styled.p``
const Date = styled.span`
  font-size: 12px;
`