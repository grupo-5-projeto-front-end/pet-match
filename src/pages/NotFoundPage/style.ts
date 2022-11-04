import styled from "styled-components"

export const StyledNotFoundPage = styled.div`

    div{
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    header{
        img{
            max-height: 100%;
        }
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-black);
        padding: 30px;
        gap: 10px;
        margin-top: 19vh;

        h1{
            color: var(--color-white);
            font-size: 1rem;
        }

        figure{
            
            width: 100%;
            display: flex;
            justify-content: center;

            img{
                border: solid 4px var(--color-salmon);
                border-radius: 50%;
                
                
            }

        }


    }
`