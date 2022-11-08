import styled from "styled-components";

export const StyledMainPerfil = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;


  @media  (min-width: 870px ) {
    flex-direction: row;
  }
`;

export const StyledDivPetPerfil = styled.div`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border: solid 2px var(--color-gray);
 

  figure {
    max-width: 200px;
    min-width: 200px;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .Content_Box {
    min-width: 200px;
    max-width: 230px;
    height: 160px;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    padding: 1rem;
    h2 {
      max-width: 150px;
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media  (min-width: 880px ) {
    justify-content: flex-start;
  }

  @media  (min-width: 630px ) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }



`;
