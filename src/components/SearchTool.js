import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchTool({
  setSearchTerm,
  setAppMode,
  appMode,
  setPage,
  safeSearch,
  setSafeSearch,
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
    setPage({ trending: 0, search: 0 });
    setUserInput("");
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="50vw"
    >
      <InputGroup width="100%">
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
