import styled from "styled-components";
import colors from "../../utils/colors";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 10px;

  a {
    background-color: #eee;
    color: ${colors.dark};
    text-decoration: none;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    img {
      background-size: cover;
      height: inherit;
    }
  }
`;
