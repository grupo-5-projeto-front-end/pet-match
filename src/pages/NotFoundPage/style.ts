import styled from "styled-components"

export const StyledNotFoundPage = styled.div`

    gap: 10px;
    height: 83vh;
        
    div{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 75vh;
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
            padding: 8vh;
            gap: 10px;
            height: 45vh;
        

            h1{
                color: var(--color-white);
                font-size: 1rem;
            }

            figure{
                
                width: 100%;
                max-height: 90%;
                display: flex;
                justify-content: center;

                img{
                    border: solid 4px var(--color-salmon);
                    border-radius: 50%;
                    
                    
                }

            }


        }
`