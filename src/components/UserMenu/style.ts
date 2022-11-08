import styled from "styled-components";

import { iStyledMenuProps } from "./interface";

export const StyledUserMenu = styled.div<iStyledMenuProps>`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 270px;
  max-width: 100%;
  height: 100%;

  z-index: 0;

  background-color: var(--color-black);

  & > div:first-child {
    padding-inline: 15px;
    z-index: 2;
    background-color: var(--color-black);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .userBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    width: 100%;
  }

  .userBox > div {
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 50px;
    width: 50px;
    overflow: hidden;
  }

  .userBox > div > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .userBox > h3 {
    width: 90%;
    font-size: 1.2rem;
    color: var(--color-white);
  }

  .expandMenuArrow > span {
    display: block;
    color: var(--color-white);
    margin-right: 5px;
    transform: rotate(-90deg);
    cursor: pointer;
  }

  .menuButtons {
    position: absolute;
    top: 80px;
    padding: 15px;

    background-color: var(--color-black);

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 600px) {
    .menuButtons {
      top: 50px;
    }

    & > div:first-child {
      display: flex;
    }

    & > div:first-child > img {
      width: 100px;
    }
  }

  @media (max-width: 375px) {
    .menuButtons {
      width: ${({ width }) => `${width}px`};
    }


  }

`
