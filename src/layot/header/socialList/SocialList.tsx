import React from 'react';
import { Icon } from "../../../components/icon/Icon";
import { S } from "./SocialList_Styles";

type SocialIcon = {
    id: string;
    iconId: string;
};

const socialIcons: SocialIcon[] = [
    { id: "github", iconId: "github" },
    { id: "twitter", iconId: "twitter" },
    { id: "linkedin", iconId: "linkd" },
];

export const SocialList: React.FC = () => {
    return (
        <S.SocialList>
            {socialIcons.map((social) => (
                <S.SocialItem key={social.id}>
                    <S.SocialLink>
                        <Icon iconId={social.iconId} width={"32"} height={"32"} viewBox={"0, 0, 32, 32"} />
                    </S.SocialLink>
                </S.SocialItem>
            ))}
        </S.SocialList>
    );
};
