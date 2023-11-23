import React from 'react';
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Education_Styles";

type CardPropsType = {
    speciality: string;
    place: string;
    location: string;
    period: string;
};

 export const Card:React.FC<CardPropsType> = (data: CardPropsType) => {
    const iconData = [
        { iconId: "building", value: data.place },
        { iconId: "location", value: data.location },
        { iconId: "calendar", value: data.period },
    ];

    return (
        <S.Card>
            <S.Speciality>{data.speciality}</S.Speciality>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                {iconData.map((item) => (
                    <FlexWrapper key={item.iconId} align={"center"} justify={"space-around"} wrap={"wrap"}>
                        <Icon iconId={item.iconId} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                        <S.Text>{item.value}</S.Text>
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </S.Card>
    );
};


