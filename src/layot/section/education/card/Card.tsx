import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Education_Styles"
type CardPropsType ={
    speciality: string
   location: string
    place: string
    period: string
}

 export const Card = (props:CardPropsType) => {
    return (
        <S.Card>

                <S.Speciality>{props.speciality}</S.Speciality>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"} >
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <S.Place>{props.place}</S.Place>

                    <Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                    <S.Location>{props.location}</S.Location>
                </FlexWrapper>

                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                     <S.Date>{props.period}</S.Date>
                </FlexWrapper>

            </FlexWrapper>
        </S.Card>
    );
};

