import styled from "styled-components";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledFormBase } from "../../styles/styledFormBase";

export const StyledFormPet = styled(StyledFormBase)`
  width: 90%;
  gap: 6px;
  /* align-items: center; */

  input {
    width: 100%;
    /* height: 40px; */
    border-radius: 5px;
    padding: 6px 5px;
  }
`;

export const StyledTitleAddPet = styled.div`
  max-width: 516px;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
  /* gap: 1rem; */

  cursor: pointer;

  span {
    background-color: var(--color-salmon);
    padding: 5px;
    border-radius: 3px;
  }
`;

export const StyledSexAndCategory = styled.div`
  width: 100%;
  display: flex;

  label {
    color: var(--color-white);
    margin-bottom: 1px;
  }
  span {
    color: var(--color-salmon);
  }

  .category {
    width: 74%;
    input {
      width: 93%;
    }
    label {
      color: var(--color-white);
      margin-bottom: 1px;
    }

    @media all and (min-width: 480px) {
      input {
        width: 98%;
     
      }
      margin-right: 10px;
    }
  }
  .sex {
    width: 20%;

    select {
      font-size: 1rem;
      border-radius: 5px;
      height: 45px;
      background-color: var(--color-gray);
    }
  }
`;
