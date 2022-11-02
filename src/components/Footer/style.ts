import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 90px;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;

    background-color: #242222; //mudar para variável quando estilização global for feita

    div {
        height: 30px;

        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            color: #f5f5f5; //mudar para variável quando estilização global for feita
        }
    }
`