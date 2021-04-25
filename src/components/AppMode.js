import React from "react";
import { Text } from "@chakra-ui/react";

export default function AppMode({ appMode }) {
  return (
    <Text fontSize="4xl" m="2rem" color="gray.500">{`${
      appMode === "trending" ? "#TrendingGifs" : "Searching"
    }`}</Text>
  );
}
