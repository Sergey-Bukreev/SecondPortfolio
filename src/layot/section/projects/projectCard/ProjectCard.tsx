import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Project_Style"
type ProjectCardPropsType = {
    title: string
    text: string
    src: string
}
export const ProjectCard:React.FC<ProjectCardPropsType> = (props: ProjectCardPropsType) => {
    return (
        <S.ProjectCard>

                <S.ProjectImage src={props.src}/>
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <S.ProjectDescription>{props.text}</S.ProjectDescription>
                    <FlexWrapper align={"flex-end"}>
                        <Icon iconId={"Group"}  width={"20px"} height={"20px"} viewBox={"0, 0, 20, 20"}/>
                        <S.LinkProject>Live Preview</S.LinkProject>
                        <Icon iconId={"code"}  width={"20px"} height={"20px"} viewBox={"0, 0, 20, 20"}/>
                        <S.LinkProject>View Code</S.LinkProject>
                    </FlexWrapper>



        </S.ProjectCard>
    );
};

