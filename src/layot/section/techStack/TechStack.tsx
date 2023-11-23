import React from 'react';
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import {S} from "./TechStack_Styled"


const iconsData = [
    { id: "ico1", width: "88px", height: "88px", viewBox: "0, 0, 88, 88" },
    { id: "ico2", width: "120px", height: "120px", viewBox: "0, 0, 120, 120" },
    { id: "ico3", width: "88px", height: "88px", viewBox: "0, 0, 88, 88" },
    { id: "ico4", width: "105px", height: "105px", viewBox: "0, 0, 105, 105" },
    { id: "ico5", width: "112px", height: "100px", viewBox: "0, 0, 112, 100" },
    { id: "ico6", width: "118px", height: "88px", viewBox: "0, 0, 118, 88" },
    { id: "ico7", width: "120px", height: "120px", viewBox: "0, 0, 120, 120" },
    { id: "ico8", width: "120px", height: "120px", viewBox: "0, 0, 120, 120" },
    { id: "ico9", width: "120px", height: "120px", viewBox: "0, 0, 120, 120" },
    { id: "ico10", width: "130px", height: "130px", viewBox: "0, 0, 130, 130" },
];

export const TechStack: React.FC = () => {
    return (
        <S.TechStack>
            <Container>
                <SectionTitle>MY Tech Stack</SectionTitle>
                <S.Text>Technologies I’ve been working with recently</S.Text>
                <S.Icons>
                    {iconsData.map((icon) => (
                        <Icon key={icon.id} iconId={icon.id} width={icon.width} height={icon.height} viewBox={icon.viewBox} />
                    ))}
                </S.Icons>
            </Container>
        </S.TechStack>
    );
};

