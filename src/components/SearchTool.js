import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchTool({
  setSearchTerm,
  setAppMode,
  appMode,
  setPage,
}) {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (e) => {
    if (e.code === "Enter") {
      searchHandler();
    } else {
      setUserInput(e.target.value);
    }
  };

  const searchHandler = () => {
    if (appMode !== "search") {
      setAppMode("search");
    }
    setSearchTerm(userInput);
    setPage((page) => ({ ...page, [appMode]: 0 }));
    setUserInput("");
  };

  return (
    <Box
      d="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="50vw"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Type a search term"
          value={userInput}
          onChange={changeHandler}
          onKeyDown={changeHandler}
        />
      </InputGroup>
      <Button px="3rem" mx="0.5rem" onClick={searchHandler}>
        Search
      </Button>
    </Box>
  );
}
