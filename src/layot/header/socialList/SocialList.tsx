import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "./SocialList_Styles"

export const SocialList:React.FC = () => {
    return (
        <S.SocialList>
            <S.SocialItem>
                <S.SocialLink>
                    <Icon iconId={"github"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"}  />
                </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.SocialLink>
                    <Icon iconId={"twitter"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"} />
                </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.SocialLink>
                    <Icon iconId={"linkd"} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"} />
                </S.SocialLink>
            </S.SocialItem>
        </S.SocialList>
    );
};

