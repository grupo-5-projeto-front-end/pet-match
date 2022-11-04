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

  #black {
    background-color: var(--color-black);
    max-width: 100%;
    padding: 10%;

    & > h3,
    & > p {
      color: var(--color-white);
    }
  }
`;
