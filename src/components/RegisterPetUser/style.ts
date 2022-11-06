import styled from "styled-components";
import { StyledFormBase } from "../../styles/styledFormBase";

export const StyledFormPet = styled(StyledFormBase)`
  width: 90%;
  gap: 6px;

  input {
    width: 100%;
    border-radius: 5px;
    padding: 3px 5px;
    font-size: 1rem;
    color: var(--color-placeholder);
    background-color: var(--color-gray);
  }
  .userId {
    display: none;
  }
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

export const StyledSexAndCategory = styled.div`
  width: 100%;
  display: flex;
  select {
    font-size: 1rem;
    border-radius: 5px;
    height: 45px;
    background-color: var(--color-gray);
  }

  label {
    color: var(--color-white);
    margin-bottom: 1px;
  }
  span {
    color: var(--color-salmon);
  }

  .category {
    display: flex;
    flex-direction: column;
    width: 70%;
    select {
      width: 98%;
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
      width: 74%;
    }
  }
  .sex {
    display: flex;
    flex-direction: column;
    select {
      font-size: 1rem;
      border-radius: 5px;
      height: 45px;
      background-color: var(--color-gray);
    }
  }
`;
