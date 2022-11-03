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