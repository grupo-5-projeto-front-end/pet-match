import styled from "styled-components";
import { iPropsButtom } from "./interface";

export const  StyledButton = styled.button<iPropsButtom>`

width: ${({width})=> `${width}px` };

background: var(${({background})=>background });

height: ${({height})=>`${height}px` };

font-size: ${({fontSize})=>`${fontSize}rem` };
border-radius: 5px;


`