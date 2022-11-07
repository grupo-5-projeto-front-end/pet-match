import styled from "styled-components"

export const StyledCarrousel = styled.ul `
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    overflow-x: auto;

    @media all and (min-width: 480px) {
        width: 50vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        
        

    }

`
export const StyledPetDashboard = styled.div`
header {
    div {
        margin-left: 8vw;
    }
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
                div {
                    display: flex;
                    flex-direction: column;
                    h4 {
                        margin-top: -40px;
                        margin-bottom: 40px;
                        background-color: #fff;
                    }

                    
                }
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
            
            ul {
                li {
                    width: 240px;
                }
            }}
`