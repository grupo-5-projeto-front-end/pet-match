import styled from "styled-components";

export const StyledUserPets = styled.section`

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    height: 484px;
    padding: 20px;

    border: solid 1px var(--color-black);

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 35px;
    }

    .petList {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 40px;
        overflow: auto;
    }

    .gradient {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 70%;
        pointer-events: none;

        background-image: linear-gradient(to right, #0000 , white);

    }


`