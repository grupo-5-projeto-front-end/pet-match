import styled from "styled-components";
import { Link } from "react-router-dom";

export interface iStyledLinkProps {
    width: string;
    height: string;
    background: string;
    fontSize: string;
    color: string;
}

export const StyledLinkRedirect = styled(Link)<iStyledLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  width: ${({ width }) => `${width}`};

  background: var(${({ background }) => background});
  color: var(${({ color }) => color});

  height: ${({ height }) => `${height}px`};

  font-size: ${({ fontSize }) => `${fontSize}rem`};
  border-radius: 5px;
  font-weight: 700;
  transition: 0.2s linear;

  cursor: pointer;

  :hover {
    filter: brightness(1.5);
  }
`;