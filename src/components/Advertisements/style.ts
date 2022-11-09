import styled from "styled-components";

export const StyledAside = styled.aside`    
    margin-bottom: 1rem;
  .sponsor {
    width: 100%;
    background-color: var(--color-black);
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    gap: 5px;
    transition: 0.2s;
    padding: 1rem;
    
    > div {
      padding-bottom: 5px;
      border-bottom:solid 1px var(--color-salmon);
    }
    .sponsor__text {
      width: 100%;
      padding: 0 30px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        font-size: 0.8rem;
        font-weight: 300;
        color: var(--color-white);
        line-height: 20px;

        margin: 5px 0 0 0;
      }

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-white);
        line-height: 50px;

        margin: 15px 0 15px 0;
      }

      span {
        color: var(--color-salmon);
        font-weight: 600;
        margin-bottom: 5px;
      }
    }

    .sponsor__divider {
      height: 130px;
      width: 1px;

      margin: 0 20px;

      background-color: var(--color-white);
    }

    p {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-white);

      margin-right: 10px;
    }

    @media (min-width: 769px) {
    /* width: calc(95% / 3); */
    
    flex-direction: row;
    /* height: 350px; */
  }
  }
`;
