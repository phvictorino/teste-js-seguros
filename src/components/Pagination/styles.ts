import styled, { css } from "styled-components";
import colors from "../../utils/colors";

interface ContainerProps {
  pages: number;
}

interface ItemProps {
  active?: boolean;
}

const EXTRA_STEPS = 2;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    display: grid;
    grid-template-columns: repeat(
      ${(props) => props.pages + EXTRA_STEPS},
      minmax(auto, 1fr)
    );
    grid-column-gap: 20px;
    text-align: center;
    border: 2px solid ${colors.primary};
    border-radius: 5px;
  }
`;

export const Item = styled.button<ItemProps>`
  ${(props) =>
    props.active
      ? css`
          background-color: ${colors.primary};
          color: ${colors.light};
        `
      : css`
          background-color: transparent;
        `}

  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${colors.primary};
    color: ${colors.light};
  }

  border: none;
  text-decoration: none;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  width: 50px;

  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;
