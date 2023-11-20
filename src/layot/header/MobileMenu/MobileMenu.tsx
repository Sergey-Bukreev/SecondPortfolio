import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";

export const MobileMenu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map( (item, index)=> {
                        return<ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>

                    })
                    }


                </ul>
            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    
  }
  
  @media ${Theme.media.tablet} {
    display: block;
  }
`
const ListItem = styled.li`

  &:hover {
    background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transform: scale(1.3);

  }
`
const Link = styled.a`
  text-align: center;
  font-family: DM Sans,serif;;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: ${Theme.colors.font};
  
`
const BurgerButton = styled.button<{isOpen:boolean}>`
position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index:999999999 ;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.font};
    
    position: absolute;
    left: 40px;
    bottom: 50px;
    
     ${ props => props.isOpen && css<{isOpen:boolean}>`
        background-color: rgba(255, 255, 255, 0);
     `}
    
    &::before{
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.font};

      position: absolute;
      transform: translateY(-10px);

       ${ props => props.isOpen && css<{isOpen:boolean}>`
         transform: rotate(-45deg) translateY(0);
     `}
    }
    &::after{
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.font};

      position: absolute;
      transform: translateY(10px);

      ${ props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
     `}
    }
  }
`
const MobileMenuPopup = styled.div<{isOpen:boolean}>`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;
  
  ${ props => props.isOpen && css<{isOpen:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`