import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  header {
    div {
      width: 100%;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: calc(100% / 2);
        max-width: 220px;
      }

      a {
        width: calc(100% / 2);
        max-width: 120px;
      }
    }
  }

  & > footer {
    bottom: 0;
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
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-black);
      }

      & > h2 {
        font-size: 1.25rem;
      }

      & > h3 {
        font-size: 1rem;
      }

      & > p {
        font-size: 1rem;
        line-height: 1.25rem;
        text-align: justify;
        color: var(--color-black);
      }

      & > img {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      div,
      img {
        width: 45%;
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

      & > img {
        height: 232px;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    & > ul {
      width: 90%;

      display: flex;
      gap: 0.5rem;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 1rem;

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
