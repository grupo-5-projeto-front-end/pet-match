import styled from "styled-components";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledFormBase } from "../../styles/styledFormBase";
import 'animate.css';

export const StyledDivEditar = styled.div`
  width: 100%;
  padding: 0 1rem;
  background-color: red;
  margin: 0 auto;
`;
export const StyledForm = styled(StyledFormBase)`
  animation-duration: 1s;
  width: 90%;
  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 0 5px;
  }
`;

export const StyledBoxInput = styled(StyledInputContainer)`
  width: 100%;
  gap: 1px;
`;

export const StyledBoxContentCidade = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
 

  label {
    color: var(--color-white);
    margin-bottom: 1px;
  }
  span {
    color: var(--color-salmon);
  }

  .city {
    width: 85%;
  }
  .Stat {
    width: 20%;

    select {
      border-radius: 5px;
      height: 43px;
      background-color: var(--color-gray) ;
    }
  }
`;
