import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 90px;
    background-color: var(--color-black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s;
    padding: 0 100px;
    z-index: 3;

    .logo {
            height: 40%;
    }
    

    @media all and (max-width: 600px) {
        height: 50px;
        padding: 0 17px;

        .logo {
            display: none;
        }

    }

    @media all and (max-width: 480px) {
        height: 50px;
    }

    @media all and (max-width: 375px) {
        padding: 0;
        .logoutButton {
            margin-inline:15px;
            z-index: 3;
        }
    }

`;
