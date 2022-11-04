import styled from "styled-components";

export const StyledCarrousel = styled.ul `
    height: 400px;
    width: 100%;

    max-width: 700px;

    display: flex;
    align-items: center;
    gap: 15px;

    overflow-x: auto;

    @media all and (min-width: 768px) {
        height: 700px;

        flex-wrap: wrap;

        overflow-x: hidden;
        overflow-y: auto;
    }
`