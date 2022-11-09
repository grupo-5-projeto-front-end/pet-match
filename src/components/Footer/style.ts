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
    gap: 8px;

    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 12px;
      text-align: left;
      color: var(--color-salmon);
      width: 80px;
    }

    p {
      font-weight: 500;
      font-size: 0.7rem;
      line-height: 14px;
      color: var(--color-white);

      @media all and (min-width: 425px) {
        font-size: 0.9rem;
      }
    }

    h4 {
      font-weight: 500;
      font-size: 0.7rem;
      line-height: 12px;
      color: var(--color-white);

      @media all and (min-width: 425px) {
        font-size: 0.9rem;
      }
    }

    .textContainer__wrapper {
      height: 90%;
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

        span {
          display: flex;
          gap: 2px;

          @media all and (min-width: 425px) {
            gap: 5px;
          }
        }

        a {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-white);
          transition: .2s;
        }

        a:hover {
          color: var(--color-salmon );
        }
      }

    }

  }

  @media all and (min-width: 782px) {
    bottom: -300px;
  }
`;
