import styled from "styled-components";

export const StyledDashboard = styled.div `
    /* border: 5px solid blue; */

    header {
        button {
            margin-right: 8vw;
        }
    }

    section {
        width: 90%;

        margin: 0 auto;

        display: flex;
        flex-direction: column;

        ul {
            li {
                height: 325px;
                min-width: 232px;
            }
        }

    }

    form {
        width: 260px;
        
        margin: 18px auto;

        display: flex;
        align-items: center;

        transition: .2s;

        input {
            padding: 15px 50px 15px 15px;
        }

        button {
            margin-left: -47px;

            display: flex;
            align-items: center;
            justify-content: center;

            z-index: 2;
        }
    }

    .sponsor {
        height: 150px;
        width: 100%;
        max-width: 470px;

        background-color: var(--color-black);

        display: flex;
        align-items: center;
        justify-content: space-between;

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
            form {
                width: 400px;

                input {
                    padding: 15px 70px 15px 15px;
                }

                button {
                    margin-left: -67px;

                    width: 70px;
                }
            }
    }
`