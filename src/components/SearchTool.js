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
  searchHandler,
  searchTerm,
  setSearchTerm,
}) {
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
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
          value={searchTerm}
          onChange={changeHandler}
        />
      </InputGroup>
      <Button px="3rem" mx="0.5rem" onClick={searchHandler}>
        Search
      </Button>
    </Box>
  );
}
