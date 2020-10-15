import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;

  div {
    margin: 0 10px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }
`;
