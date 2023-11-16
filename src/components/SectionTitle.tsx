import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  
  font-family: Poppins,serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 5px;
  margin-bottom: 90px;
  
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 140px;
    height: 2px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    
  }

`
