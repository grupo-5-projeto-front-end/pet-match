import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 90px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    bottom: -54px;
    left: 0;

    background-color: var(--color-black);

    div {
        height: 70px;
        width: fit-content;

        display: flex;
        flex-direction: column;
        gap: 7px;

        p {
            font-weight: 500;
            font-size: 0.70rem;
            line-height: 12px;
            text-align: center;
            color: var(--color-white); 
        }
    }
`