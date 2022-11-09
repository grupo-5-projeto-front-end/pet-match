import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 90px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  bottom: -5px;
  left: 0;

  background-color: var(--color-black);

  transition: 0.2s;

  div {
    height: 70px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 7px;

    p {
      font-weight: 500;
      font-size: 0.7rem;
      line-height: 12px;
      text-align: center;
      color: var(--color-white);
    }
  }

  @media all and (min-width: 782px) {
    bottom: -300px;
  }
`;
