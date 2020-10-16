import React, { ChangeEvent, useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import * as S from "./styles";
import GlobalContext from "../../contexts/global";

const InputSearch: React.FC = () => {
  const { findMovies } = useContext(GlobalContext);

  const [input, setInput] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    await findMovies(input);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInput}
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
