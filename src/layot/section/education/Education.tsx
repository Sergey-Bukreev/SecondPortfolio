import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Card} from "./card/Card";
import {S} from "./Education_Styles"

const EducationData = [
    {speciality: "Automated Control Systems & Electric Drive", place:"Kharkov Polytechnic Institute", period:"Aug 2012 - Dec 2018", location:"Kharkov" },

    {speciality:"Front And Developer", place:"IT_INCUBATOR", period:"Nov 2023 - today", location:"Minsk"}
]


export const Education = () => {

    const listEducation = EducationData.map((ed: any) => <Card key={"index"} {...ed}/>)

    return (
        <S.Education>
            <Container>
                <SectionTitle>Education</SectionTitle>
                {listEducation}
            </Container>

        </S.Education>
    );
};

