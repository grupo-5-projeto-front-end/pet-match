import styled from "styled-components";

export const StyledDashboard = styled.div `
    /* border: 5px solid blue; */

    header {
        button {
            margin-right: 8vw;
        }
    }

    form {
        width: 260px;
        
        margin: 18px auto;

        display: flex;
        align-items: center;

        input {
            padding: 15px 50px 15px 15px;
        }

        button {
            margin-left: -50px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`