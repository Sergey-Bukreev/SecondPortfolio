import React from 'react';
import {S} from "../HeaderMenu_Styles"

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Tech Stack",
        href: "techStack"
    },
    {
        title: "Project",
        href: "project"
    },
    {
        title: "Contact",
        href: "contact"
    }
    ]
export const Menu:React.FC = () => {
    return (
        <ul>
            {items.map( (item, index)=> {
                return<S.ListItem key={index}>
                    <S.NavLink to={item.href} smooth={true} activeClass={"active"} spy={true} >{item.title} </S.NavLink>
                </S.ListItem>

            })
            }


        </ul>
    );
};

