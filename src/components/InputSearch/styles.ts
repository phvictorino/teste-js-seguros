import styled from "styled-components";

export const Container = styled.div`
  background-color: #ccc;
  margin: 50px;

  input {
    width: 100%;
    background-color: transparent;
    border: 0;
    padding: 10px;
  }

  input:active,
  input:focus {
    outline: none;
  }
`;
