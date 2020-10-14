import React, { useContext } from "react";
import { MdSearch } from "react-icons/md";
import * as S from "./styles";
import GlobalContext from "../../contexts/global";

const InputSearch: React.FC = () => {
  const { text, setText, findMovie } = useContext(GlobalContext);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    await findMovie();
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
