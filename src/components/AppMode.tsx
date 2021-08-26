import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import { Page, AppModeType } from "../types";

interface Props {
  appMode: string;
  searchTerm: string;
  setAppMode: React.Dispatch<React.SetStateAction<AppModeType>>;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export default function AppMode({
  appMode,
  searchTerm,
  setAppMode,
  setPage,
}: Props) {
  const handleReturnTrending = () => {
    setAppMode("trending");
    setPage({ trending: 0, search: 0 });
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "space-between",
      }}
      alignItems="center"
      width="100%"
      pr="2rem"
    >
      <Text
        fontSize="4xl"
        m="2rem"
        color="gray.500"
        data-testid="app-mode"
        textAlign="center"
      >{`${
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
