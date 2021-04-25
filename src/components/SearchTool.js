import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";

export default function SearchTool() {
  return (
    <Box
      d="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="50vw"
    >
      <Input placeholder="Type a search term" />
      <Button px="3rem" mx="0.5rem">
        Search
      </Button>
    </Box>
  );
}
