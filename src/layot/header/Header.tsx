import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/MobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {SocialList} from "./socialList/SocialList";
// const items = ["Home", "About", "Tech Stack", "Project", "Contact"]


export const Header:React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>

                <FlexWrapper justify={"space-around"} align={"center"}  >
                    {width < breakpoint ? <MobileMenu  />
                                        : <DesktopMenu  />}


                    <SocialList />
                </FlexWrapper>



            </Container>

        </S.Header>
    );
};


