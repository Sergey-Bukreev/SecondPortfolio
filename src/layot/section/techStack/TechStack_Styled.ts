import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const TechStack = styled.section``;

export const Text = styled.p`
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 26px; /* 81.25% */
  display: block;
  margin-bottom: 30px;
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;

  @media ${Theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const S = {
    TechStack,
    Icons,
    Text
}