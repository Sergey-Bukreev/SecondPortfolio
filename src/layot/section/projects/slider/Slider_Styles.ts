import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";


const Slider = styled.div`

  max-width: 1150px;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`

const Slide = styled.div`

  text-align: center;
`

const Pagination = styled.div`
span {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20%;
  & + span {
    margin-left: 5px;
  }
  &.active {
    background-color: ${Theme.colors.accent};
    width: 20px;
  }
}
`

export const S = {
    Slider,
    Slide,
    Pagination
}