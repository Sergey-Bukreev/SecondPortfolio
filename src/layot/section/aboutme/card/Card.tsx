import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
type CardPropsType ={
    speciality: string
   location: string
    place: string
    period: string
}

 export const Card = (props:CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper align={"center"}>
                <Speciality>{props.speciality}</Speciality>

            </FlexWrapper>

            <FlexWrapper align={"center"} justify={"space-between"}>
                <FlexWrapper >
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <Place>{props.place}</Place>
                    <Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <Location>{props.location}</Location>
                </FlexWrapper>


                <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                <Date>{props.period}</Date>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 8px;
  padding: 16px;
  align-items: center;
  width: 100%;
  margin: 0 auto;

`
const Speciality = styled.p``

const Place = styled.p`
  font-size: 12px;
`
const Location = styled.p``
const Date = styled.span`
  font-size: 12px;
`