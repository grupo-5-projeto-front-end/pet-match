import styled from "styled-components";
import { Link } from "react-router-dom";
import { iStyledLinkProps } from "../../components/UserMenu/interface";

export const StyledLoginPage = styled.div`
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

  .textContainer {
    display: none;
  }

  form {
    h2 {
      font-size: 36px;
      font-weight: 700;
      color: var(--color-white);
      margin-bottom: 35px;
    }
  }

  .inputBox {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    width: 95%;
  }

  .spanForgetMyPass {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    text-align: center;
    color: var(--color-gray);
    margin-top: 11px;
  }

  .whiteLine {
    width: 100%;
    height: 5px;
    border-radius: 4px;
    background-color: var(--color-white);
    margin-top: 11px;
  }

  .spanDontHaveAcccount {
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    color: var(--color-white);
    padding: 9px 0;
  }

  main {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: max-content;
    justify-content: center;
    margin: 18px auto;
  }

  @media screen and (min-width: 768px) {
    main {
      margin: 27px auto;
    }

    .textContainer {
      display: flex;
      width: 90%;
      max-width: 500px;
      gap: 55px;
      flex-direction: column;
      align-items: center;

      img {
        width: 300px;
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
      }

      p {
        font-size: 0.8rem;
        font-weight: 400;
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 700;
        text-align: left;
      }
    }

    main {
      gap: 20%;
      padding: 0 5%;
    }
  }
`;


export const StyledLinkRedirect = styled(Link)<iStyledLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  width: ${({ width }) => `${width}`};

  background: var(${({ background }) => background});
  color: var(${({ color }) => color});

  height: ${({ height }) => `${height}px`};

  font-size: ${({ fontSize }) => `${fontSize}rem`};
  border-radius: 5px;
  font-weight: 700;
  transition: 0.2s linear;

  cursor: pointer;

  :hover {
    filter: brightness(1.5);
  }
`;