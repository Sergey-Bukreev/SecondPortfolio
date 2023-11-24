import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Project_Style';

type ProjectCardPropsType = {
    title: string;
    text: string;
    src: string;
};

type LinkInfo = {
    iconId: string;
    label: string;
};

const links: LinkInfo[] = [
    { iconId: 'Group', label: 'Live Preview' },
    { iconId: 'code', label: 'View Code' },
];

export const ProjectCard: React.FC<ProjectCardPropsType> = (props: ProjectCardPropsType) => {
    return (
        <S.ProjectCard>
            <S.ProjectImage src={props.src} />
            <S.ProjectTitle>{props.title}</S.ProjectTitle>
            <S.ProjectDescription>{props.text}</S.ProjectDescription>

            <FlexWrapper align={"space-around"}>
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <Icon iconId={link.iconId} width={"20px"} height={"20px"} viewBox={"0, 0, 20, 20"} />
                        <S.LinkProject>{link.label}</S.LinkProject>
                    </React.Fragment>
                ))}
            </FlexWrapper>
        </S.ProjectCard>
    );
};
