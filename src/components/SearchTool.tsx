import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { Page, SearchEvent, AppModeType } from "../types";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setAppMode: React.Dispatch<React.SetStateAction<AppModeType>>;
  appMode: AppModeType;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export default function SearchTool({
  setSearchTerm,
  setAppMode,
  appMode,
  setPage,
}: Props) {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (e: SearchEvent<HTMLInputElement>) => {
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
      flexDirection={{ base: "column", md: "column", sm: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      width={["100vw", null, null, "50vw"]}
      mx="2rem"
      px="2rem"
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
          data-testid="input-box"
        />
      </InputGroup>
      <Button
        px="3rem"
        mx="0.5rem"
        onClick={searchHandler}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "auto" }}
        my={{ base: "1rem", sm: "1rem", md: "1rem" }}
      >
        Search
      </Button>
    </Box>
  );
}
