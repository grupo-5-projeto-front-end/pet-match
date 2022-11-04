import styled from "styled-components";

export const StyledAnimation = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 500px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;

  scale: 0.65;

  .paw {
    width: max-content;
    rotate: 15deg;
  }

  .paw--four {
    rotate: -15deg;
    position: absolute;
    top: 30px;
    left: 120px;
  }
  .paw--three {
    position: absolute;
    top: 130px;
    right: 120px;
  }

  .paw--two {
    position: absolute;
    rotate: -15deg;
    left: 120px;
    bottom: 130px;
  }

  .paw--one {
    position: absolute;
    bottom: 30px;
    right: 120px;
  }
`;
