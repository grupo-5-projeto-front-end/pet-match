import styled from "styled-components";
import { iPropsButtom } from "./interface";

export const  StyledButton = styled.button<iPropsButtom>`

width: ${({width})=> `${width}px` };

background: var(${({background})=>background });

height: ${({height})=>`${height}px` };

`