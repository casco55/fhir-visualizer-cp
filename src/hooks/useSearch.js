import { useState } from "react";

export const useSearch = () => {
  const [text, setText] = useState("UC3-Patient");
  const [searchText, setSearchText] = useState("UC3-Patient");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onSearch = () => {
    setSearchText(text);
  };

  return {
    text,
    handleChange,
    onSearch,
    searchText,
  };
};
