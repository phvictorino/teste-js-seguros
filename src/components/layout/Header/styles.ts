import styled from "styled-components";
import colors from "../../../utils/colors";

export const Container = styled.header`
  background-color: ${colors.dark};
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 200px;
  padding: 20px;

  display: flex;
  color: ${colors.light};
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 50px;

  flex: 1;
  display: flex;
  flex-direction: column;

  span {
    text-align: start;
  }
`;
