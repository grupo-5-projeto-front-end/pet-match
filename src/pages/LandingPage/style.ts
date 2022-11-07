import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  header {
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10%;

      img {
        height: 90%;
        width: 50%;
        max-width: 369px;
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    max-width: 90%;
    margin: 0 auto;

    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      & > h1,
      & > h2,
      & > h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--color-black);
      }

      & > h2 {
        font-size: 1rem;
      }

      & > h3 {
        font-size: 0.75rem;
      }

      & > p {
        font-size: 0.75rem;
        line-height: 0.94rem;
        text-align: justify;
        color: var(--color-black);
      }

      & > img {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;

      div,
      img {
        width: 50%;
        height: 100%;
      }
    }
  }

  #black {
    background-color: var(--color-black);
    max-width: 100%;
    padding: 10%;

    div {
      & > h3,
      & > p {
        color: var(--color-white);
      }
    }

    & > ul {
      width: 90%;

      display: flex;
      gap: 0.5rem;

      overflow-x: auto;

      li {
        min-width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
    }

    @media (min-width: 768px) {
      & > div {
        min-width: 50%;
      }

      & > ul {
        width: 50%;

        padding-bottom: 1rem;

        overflow-y: hidden;

        li {
          min-width: 200px;
          min-height: 200px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
