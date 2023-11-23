import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const Education = styled.section`

`
const Card = styled.div`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 8px;
  padding: 26px;
  align-items: center;
  
  width: 80%;
  margin: 0 auto;
  

  border-bottom: 2px solid ${Theme.colors.accent};
  @media ${Theme.media.mobile} {
    
  }

  // position: relative;
  // &::before {
  //   content: "";
  //   display: inline-block;
  //   width: 100%;
  //   height: 2px;
  //   background-color: ${Theme.colors.accent};
  //   position: absolute;
  //   bottom: -1px;
  //  
  //   @media ${Theme.media.tablet} {
  //   bottom: -24px;
  //   }
  // }
    
  
`
const Speciality = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-family: Poppins, serif;
  font-weight: 400;
  line-height: 28px;
`



const Text = styled.span`
  font-size: 12px;
`
export const S ={
    Education,
    Card,
    Speciality,
    Text
}