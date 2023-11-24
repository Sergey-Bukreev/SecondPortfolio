import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Project_Style"
import {Container} from "../../../components/Container";
import {Slider} from "./slider/Slider"
export const Projects:React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.Text>Things I’ve built so far</S.Text>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} align={"center"} >
                    <Slider />
                </FlexWrapper>
            </Container>

        </S.Projects>
    );
};

