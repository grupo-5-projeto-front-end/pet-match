import styled from "styled-components";

export const StyledCarrousel = styled.ul `
    height: 400px;
    width: 100%;

    padding: 0 20px;

    display: flex;
    align-items: center;
    gap: 15px;

    margin-bottom: 15px;

    transition: .2s;

    overflow-x: auto;

    @media all and (min-width: 782px) {
        height: 700px;

        flex-wrap: wrap;

        overflow-x: hidden;
        overflow-y: auto;
    }
`