import React, { useContext } from "react";

import * as S from "./styles";
import GlobalContext from "../../contexts/global";

const Pagination: React.FC = () => {
  const { pages, selectedPage, changePage } = useContext(GlobalContext);

  const handleChangePage = (page: number) => {
    changePage(page);
  };

  const maxPages = pages >= 3 ? 3 : pages;

  const Items: React.FC = () => {
    const items = [];
    for (let i = 1; i <= maxPages; i++) {
      items.push(
        <S.Item
          onClick={() => handleChangePage(i)}
          active={i === selectedPage}
          key={i}
        >
          {i}
        </S.Item>
      );
    }
    return <>{items}</>;
  };

  return (
    <S.Container pages={maxPages}>
      <div>
        <S.Item>{"<"}</S.Item>
        <Items />
        <S.Item>{">"}</S.Item>
      </div>
    </S.Container>
  );
};

export default Pagination;
