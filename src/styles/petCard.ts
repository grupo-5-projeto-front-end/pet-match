import styled from "styled-components";

export const StyledPetCard = styled.li `
    height: 305px;
    min-width: 232px;

    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    overflow: hidden;

    figure {
        height: 242px;
        width: 232px;

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }


    div {
        background-color: #f5f5f5;
        border: 1px solid var(--color-black);
        border-radius: 0 0 8px 8px; 

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {            
            width: 140px;
            height: 30px;

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;

            font-weight: 500;
            font-size: 1rem;

            background-color: var(--color-black);
            color: var(--color-white);

            position: relative;
            top: -40px;
            left: -43px;
        }
    
        p {
            width: 90%;

            position: relative;
            top: -10px;
            text-align: center;
        }
    }

`