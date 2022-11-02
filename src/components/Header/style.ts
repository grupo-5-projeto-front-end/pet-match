import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 90px;
    background-color: var(--color-black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s;

    @media all and (max-width: 480px) {
        height: 50px;
    }

`;
