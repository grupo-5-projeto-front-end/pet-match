import styled from "styled-components";

export const StyledDivPets = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 420px ;
  

  .more_pets {
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll;
    height: auto;
    border-right: none;
    overflow-y: hidden;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 1rem;
  }

  .gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 90%;
    pointer-events: none;
    border: none;
    height: 100%;

    background-image: linear-gradient(to right, #0000, white);
  }
`;

// export const StyledUserPets = styled.section`
//     position: relative;

//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//     align-items: flex-start;

//     height: 484px;
//     padding: 20px;
//     width: 90%;
//     margin: 0 auto;
//     border: solid 1px var(--color-black);

//     .petList {
//         display: flex;
//         flex-direction: row;
//         width: 100%;
//         gap: 40px;
//         overflow-x: scroll;
//         overflow-y: hidden;
//         padding-bottom: 1rem;
//     }

//

// `
