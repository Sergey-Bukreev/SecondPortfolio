import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const SocialList = styled.ul`
  display: flex;
  gap: 20px;
   

   @media ${Theme.media.tablet} {
  display: none;
     
}
 `
 export const SocialItem = styled.li`
 
`
 export const SocialLink = styled.a`
  border-radius: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.3);
  }
 `
export const S = {
    SocialLink,
    SocialItem,
    SocialList
}