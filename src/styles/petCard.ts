import styled from "styled-components";

export const StyledPetCard = styled.li`
  min-width: 200px;
  height: 300px;
  position: relative;

  @media (min-width: 769px) {
    width: calc(95% / 3);
    height: 350px;
  }

  @media (min-width: 1095px) {
    width: calc(95% / 4);
    height: 400px;
  }

  & > a {
    figure {
      width: 100%;
      height: 80%;

      border: solid 1px var(--color-black);
      border-radius: 8px 8px 0 0;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 8px 8px 0 0;
      }
    }

    div {
      background-color: var(--color-black);

      height: 20%;

      border-radius: 0 0 8px 8px;

      padding: 0.5rem;

      position: relative;

      h4 {
        color: var(--color-white);
        font-size: 1rem;
        font-weight: 700;

        width: fit-content;
        padding: 8px;
        background-color: var(--color-black);

        position: absolute;
        top: -45px;
        left: 10px;
      }

      p {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--color-white);

        max-width: 100%;
        max-height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
