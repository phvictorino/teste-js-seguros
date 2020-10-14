import styled from "styled-components";

export const Container = styled.div`
  h2 {
    text-align: center;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;
  }
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  img {
    margin-right: 30px;
  }
`;
