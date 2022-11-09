import styled from "styled-components";
import { StyledFormBase } from "../../styles/styledFormBase";

export const StyledFormPet = styled(StyledFormBase)`
  width: 90%;
  gap: 64px;
  animation-duration: 1s;

  
`;

export const StyledTitleAddPet = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
  cursor: pointer;

  span {
    background-color: var(--color-salmon);
    padding: 5px;
    border-radius: 3px;
  }
`;

