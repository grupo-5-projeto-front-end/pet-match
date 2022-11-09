import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  header {
    div {
      width: 100%;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: calc(100% / 2);
        max-width: 220px;
      }

      a {
        width: calc(100% / 2);
        max-width: 120px;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    padding: 1rem;

    .textContainer {
      display: none;
    }

    form {
      h2 {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--color-white);
        margin-bottom: 35px;
      }

      div {
        width: 100%;
        input {
          box-sizing: border-box;
          padding: 30px 0 30px 15px;
        }
      }

      .spanForgetMyPass {
        font-size: 1.125rem;
        font-weight: 500;
        text-align: center;
        color: var(--color-gray);
        margin-top: 11px;
      }

      .whiteLine {
        width: 100%;
        height: 5px;
        border-radius: 4px;
        background-color: var(--color-white);
        margin-top: 11px;
      }

      .spanDontHaveAcccount {
        font-size: 1.375rem;
        font-weight: 500;
        text-align: center;
        color: var(--color-white);
      }

      .selectContainer {
        display: flex;
        width: 100%;

        .containerStates {
          width: 45%;
          margin-left: 1rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    main {
      justify-content: space-between;
      padding: 1rem 100px;

      form {
        width: 45%;
        max-width: unset;
      }

      .textContainer {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        padding-top: 3rem;

        width: 45%;

        text-align: justify;

        img {
          width: 300px;
          align-self: center;
        }

        h3 {
          font-size: 1rem;
          font-weight: 700;
          text-align: left;
        }

        p {
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 0.94rem;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: left;
        }
      }
    }
  }
  /* header{
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
                object-fit: cover;
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
        margin: 15px auto;
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
            width: 70%;
            margin-left: 2rem;

            select{
                width: 106%;
            }
        }
    }

    @media (min-width: 768px){

        main {
            width: 80%;
            margin: 2rem auto;
            display: flex;
            padding: 0 10px;
            gap: 140px;
            
            
        }

        .textContainer {
            display: flex;
            width: 90%;
            max-width: 500px;
            margin-top: 2rem;
            gap: 55px;
            flex-direction: column;
            
            img {
                width: 100%;
                object-fit: contain;
            }

            p {
                font-size: 0.9rem;
                font-weight: 400;
                line-height: 0.94rem;
            }

            h2 {
                font-size: 1.8rem;
                font-weight: 700;
                text-align: left;
            }
        }
    } */
`;
