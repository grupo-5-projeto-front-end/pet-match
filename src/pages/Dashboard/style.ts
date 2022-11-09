import styled from "styled-components";

export const StyledLoadingDiv = styled.div`
  height: 800px;
  width: 95%;
  margin: 0 auto;
`;

export const StyledDashboard = styled.div`
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

      transition: 0.2s;
    }

    form {
      width: 100%;

      margin: 18px 0;

      display: flex;
      align-items: center;

      transition: 0.2s;

      input {
        padding: 15px;
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
  }
`;

export const StyledFooterEdit = styled.div `
  footer {
    bottom: -300px;

    @media all and (min-width: 768px) {
      bottom: -350px;
    }
  }
`