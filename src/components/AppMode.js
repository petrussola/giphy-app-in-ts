import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function AppMode({ appMode, searchTerm, setAppMode, setPage }) {
  const handleReturnTrending = () => {
    setAppMode("trending");
    setPage({ trending: 0, search: 0 });
  };

  return (
    <Box
      display="flex"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      pr="2rem"
    >
      <Text fontSize="4xl" m="2rem" color="gray.500">{`${
        appMode === "trending"
          ? "#TrendingGifs"
          : `Search results for "${searchTerm}"`
      }`}</Text>

      {appMode === "search" ? (
        <Button onClick={handleReturnTrending}>Return to Trending Gifs</Button>
      ) : null}
    </Box>
  );
}
