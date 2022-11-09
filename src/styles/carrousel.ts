import styled from "styled-components";

export const StyledCarrousel = styled.ul`
  width: 90%;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  animation-duration: 2s;
  overflow: scroll hidden;

  display: flex;
  gap: 1rem;

  @media (min-width: 769px) {
    height: 650px;

    overflow: hidden scroll;

    flex-wrap: wrap;
  }
`;
