import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 20px;

${font({family:"Poppins,sans-serif", weight:700, Fmax: 48, Fmin:36})}
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
