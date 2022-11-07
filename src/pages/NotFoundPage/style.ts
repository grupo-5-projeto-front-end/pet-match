import styled from "styled-components"

export const StyledNotFoundPage = styled.div`

    footer{
        margin: 0px;
        bottom: -50px;
    }

    height: 100vh;
    background-color: var(--color-black) ;
        
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
            display: flex;
            justify-content: center;
        }

        main{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: var(--color-black);
            gap: 5px;
            height: 50vh;
        

            h1{
                color: var(--color-white);
                font-size: 1rem;
                max-width: 80%;
                margin-bottom: 15px;
            }

            h2{
                color: var(--color-white);
                
            }

            figure{
                
                width: 100%;
                height: 90%;
                display: flex;
                justify-content: center;
                padding: 20px;
                margin-top: 0px;

                img{
                    border: solid 4px var(--color-salmon);
                    border-radius: 50%;
                    
                    
                }

            }

            
        }

        @media screen and (min-width: 768px) {
            main{
                height: 70vh;
            }

            footer{
                bottom: -50px;
            }

            div{
                height: unset;
            }
        }
`