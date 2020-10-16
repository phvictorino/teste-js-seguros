import styled from "styled-components";
import colors from "../../utils/colors";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: minmax(auto, 1fr);
  }

  a {
    display: block;
    margin: 30px;
    color: ${colors.dark};
    text-decoration: none;
    text-align: center;

    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.1);
      z-index: 999;
    }

    figure {
      position: relative;
      margin: 0;
      width: 100%;
      height: 100%;

      img {
        background-size: cover;
        width: 100%;
        height: inherit;
      }

      figcaption {
        position: absolute;
        color: #fff;
        min-height: 60px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;

        strong {
          padding: 10px;
        }
      }
    }
  }
`;
