import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const Education = styled.section`

`
const Card = styled.div`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 8px;
  padding: 16px;
  align-items: center;
  
  width: 80%;
  margin: 0 auto;
 

  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    bottom: -1px;
    
    @media ${Theme.media.mobile} {
    bottom: -18px;
    }
  }
    
  
`
const Speciality = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-family: Poppins, serif;
  font-weight: 400;
  line-height: 28px;
`

const Place = styled.p`
  font-size: 12px;
  margin-right: 20px;
`
const Location = styled.p``
const Date = styled.span`
  font-size: 12px;
`
export const S ={
    Education,
    Card,
    Speciality,
    Place,
    Location,
    Date
}