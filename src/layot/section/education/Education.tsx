import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Card} from "./card/Card";



export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <SectionTitle>Education</SectionTitle>
                <Card speciality={"Automated Control Systems & Electric Drive"}  place={"Kharkov Polytechnic Institute"} period={"Aug 2012 - Dec 2018"} location={"Kharkov"} />
                <Card speciality={"Front And Developer"} place={"IT_INCUBATOR"} period={"Nov 2023 - today"} location={"Minsk"} />


            </Container>

        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`