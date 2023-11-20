import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Contacts = styled.section`
div {
  margin-bottom: 140px;
}
  @media ${Theme.media.mobile} {
    div {
      margin-bottom: 40px;
    }
  }
`
const Title = styled.h2`
  ${font({family:"DM Sans, serif", weight:700, Fmax:58, Fmin:36})}
  
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
`
const ContactLink = styled.a`
  ${font({family:"DM Sans, serif", weight:700, Fmax:58, Fmin:28})}
  
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  background:${Theme.colors.fontSecond};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`
const ContactLinkSmall = styled.a`
  font-family: DM Sans, serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  margin-right: 20px;

  &:hover {
    background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;


`
const  Name = styled.p`
  font-family: DM Sans, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  margin-right: 20px;
  background:${Theme.colors.fontSecond};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const S = {
    Contacts,
    Title,
    ContactLink,
    ContactLinkSmall,
    Name

}