import styled from "styled-components";



export const StyledUserPets = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

.box_backOut{
  border-radius: 5px;
  width: 70px;
  display: flex;
  align-self: flex-end;
  background-color: var(--color-salmon);
  margin-right: .9rem;
  .back_Dash{
    width :100px;
    height: 50px;
    font-weight: 700;
    color: var(--color-white);

    display: flex; align-items: center;
    justify-content: center;
  }
  @media  (min-width: 601px ) {
    margin-right: 6.3rem;
   
  }



}

footer{
      bottom: 0;
}

`
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
    gap: 1rem;
    padding: 1rem;
    h2 {
      max-width: 100%;
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bio{
      
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
