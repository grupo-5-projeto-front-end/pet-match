import styled from "styled-components"

export const StyledNotFoundPage = styled.div`
    height: 100vh;
    background-color: var(--color-black) ;
        
    .wrapper{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        transition: .2s;
        background-color: var(--color-black);

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
            gap: 5px;
            height: 50vh;
            transition: .2s;

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
                    object-fit: cover;
                    
                    
                }

            }

            a {
                z-index: 2;
            }            
        }

        footer{
            bottom: 90px;
            transition: .2s;
        }

        @media screen and (min-width: 768px) {
            main{
                height: 70vh;
            }

            footer{
                margin-top: 20px;
                bottom: 100px;
            }            
        }
`