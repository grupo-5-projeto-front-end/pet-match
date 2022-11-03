import styled from "styled-components";
import { iPropsButtom } from "./interface";

export const StyledButton = styled.button<iPropsButtom>`

width: ${({width})=> `${width}` };

background: var(${({background})=>background });
color: var(${({color})=>color });

height: ${({height})=>`${height}px` };

font-size: ${({fontSize})=>`${fontSize}rem` };
border-radius: 5px;
font-weight: 700;
transition: .2s linear;

cursor: pointer;


:hover{
    filter:brightness(1.5)
}

`