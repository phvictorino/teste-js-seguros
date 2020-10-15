import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  background-color: transparent;
  border: 2px solid ${colors.primary};
  margin: 20px 0;

  form {
    display: flex;
  }

  button {
    width: 20vw;
    padding: 0 20px;
    cursor: pointer;
    border: 0;
    color: ${colors.dark};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    transition: background-color 0.5s;

    svg {
      margin-right: 5px;
    }

    :active,
    :focus {
      outline: 0;
    }

    :hover {
      background-color: #ccc;
    }
  }

  input {
    width: 100%;
    background-color: transparent;
    border: 0;
    padding: 20px;
    font-size: 18px;
    color: ${colors.dark};
  }

  input:active,
  input:focus {
    outline: none;
  }
`;
