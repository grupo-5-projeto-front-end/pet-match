import styled from "styled-components"

export const StyledRegisterPage = styled.div`
    header{
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10%;
            
            img{
                height: 90%;
                width: 50%;
                max-width: 369px;
            }
        }
    }

    main{
        display: flex;
    }

    .textContainer{
        display: none;
    }

    form{
        width: 90%;
        margin: 1rem auto;
        h2{
            font-size: 36px;
            font-weight: 700;
            color: var(--color-white);
            margin-bottom: 35px;
        }
        input{
            width: 105%;
        }
    }

    .selectContainer{
        display: flex;
        width: 100%;
        
        .containerStates{
            width: 30%;
            margin-left: 2rem;
        }
    }

    @media (min-width: 768px){
        .textContainer{
            display: block;
        }

        main{
            width: 80%;
            margin: 2rem auto;
            display: flex;
            padding: 0 10px;
            gap: 140px;
            height: 90vh;
        }

        .textContainer{
            display: flex;
            width: 90%;
            max-width: 500px;
            align-self: center;
            gap: 55px;
            flex-direction: column;
            align-items: center;
        }

        form{
            overflow-y: scroll;
        }
    }
`