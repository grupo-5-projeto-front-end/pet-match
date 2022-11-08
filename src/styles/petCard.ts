import styled from "styled-components";

export const StyledPetCard = styled.li `
    height: 305px;
    min-width: 232px;
    max-width: 232px;

    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: relative;

    overflow: hidden;

    transition: .2s;

    figure {
        height: 242px;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            transition: .2s;
        }
    }


    div {
        width: 100%;
        height: 70px;
        background-color: #f5f5f5;
        border: 1px solid var(--color-black);
        border-radius: 0 0 8px 8px; 

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        transition: .2s;

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

            transition: .2s;

            @media all and (min-width: 768px) {
                left: -35px;
            }
            
            @media all and (min-width: 900px) {
                left: -55px;
            }
 
            @media all and (min-width: 1000px) {
                left: -72px;
            }
        }
    
        p {
            width: 90%;

            position: relative;
            top: -10px;
            text-align: center;
        }
    }

    @media all and (min-width: 900px) {
        min-width: 270px;
        max-width: 270px;
    }

    @media all and (min-width: 1000px) {
        min-width: 300px;
        max-width: 300px;
    }
`

