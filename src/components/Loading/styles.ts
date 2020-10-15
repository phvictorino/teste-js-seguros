import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  height: 100vh;
  width: 100vw;

  > div {
    margin: 0 auto;
    top: 50%;
  }
`;
