import styled from "styled-components";

export const StyledLoadingDiv = styled.div `
    height: 800px;
    width: 95%;

    margin: 0 auto;
`

export const StyledDashboard = styled.div `
    /* border: 5px solid blue; */
    width: 100%;
    height: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    section {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        display: flex;
        flex-direction: column;

        transition: .2s;
    }

    form {
        width: 100%;
        
        margin: 18px 0;

        display: flex;
        align-items: center;

        transition: .2s;

        input {
            padding: 15px;
        }
    }

    .sponsor {
        height: 150px;
        width: 100%;

        background-color: var(--color-black);

        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: .2s;

        .sponsor__text {
            width: 100%;
            
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4 {
                font-size: 0.8rem;
                font-weight: 300;
                color: var(--color-white);
                line-height: 20px;

                margin: 5px 0 0 10px;
            }

            h3 {
                font-size: 3rem;
                font-weight: 700;
                color: var(--color-white);
                line-height: 50px;

                margin: 15px 0 15px 10px;
            }
        }

        .sponsor__divider {
            height: 130px;
            width: 1px;

            margin: 0 20px;

            background-color: var(--color-white);
        }

        p {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--color-white);

            margin-right: 10px;
        }
    }

    @media all and (min-width: 480px) {
        height: 700px;

        form {
            max-width: 900px;
        }
    }

    @media all and (min-width: 768px) {        
        width: 98%;
        gap: 20px;

        margin: 10px auto 0 auto
    }
`