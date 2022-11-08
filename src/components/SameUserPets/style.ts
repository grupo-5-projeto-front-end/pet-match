import styled from "styled-components";

export const StyledDivPets = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 420px ;
  

  .more_pets {
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll;
    height: auto;
    border-right: none;
    overflow-y: hidden;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 1rem;
  }

  .gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 90%;
    pointer-events: none;
    border: none;
    height: 100%;

    background-image: linear-gradient(to right, #0000, white);
  }
`;
