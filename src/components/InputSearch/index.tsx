import React, { FormEventHandler, useContext } from "react";
import { MdSearch } from "react-icons/md";
import * as S from "./styles";
import GlobalContext from "../../contexts/global";

const InputSearch: React.FC = () => {
  const { text, setText } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(text);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type the title and press enter"
        />
        <button type="submit">
          <MdSearch size={16} />
          Search
        </button>
      </form>
    </S.Container>
  );
};

export default InputSearch;
