import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 180px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  position: relative;
  bottom: -5px;
  left: 0;

  background-color: var(--color-black);

  transition: 0.2s;

  .textContainer {
    height: 88%;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;

    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 12px;
      text-align: left;
      color: var(--color-white);
      width: 80px;
    }

    p {
      font-weight: 500;
      font-size: 0.9rem;
      line-height: 11px;
      color: var(--color-white);
    }

    .textContainer__wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 10px;

      .textContainer__text {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
  
      .textContainer__links {
        display: flex;
        flex-direction: column;
        gap: 1.5px;

        a {
          font-size: 1rem;
          color: var(--color-white);
        }
      }

    }

  }

  @media all and (min-width: 782px) {
    bottom: -300px;
  }
`;
