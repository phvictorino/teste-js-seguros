import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  h2 {
    text-align: center;
    padding: 20px 0 0 0;
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    margin-top: 0;
    font-size: 14px;

    i {
      color: ${colors.primary};
      font-size: 20px;
      font-weight: bold;
    }
  }

  hr {
    border: 0;
    border-top: 1px solid #ccc;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 30px;

  a {
    text-align: center;
  }

  img {
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 20px;
  }

  dl {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    & + dl {
      margin-top: 40px;
    }

    dt {
      font-weight: bold;
    }

    dd {
      margin-left: 0;
    }
  }
`;
