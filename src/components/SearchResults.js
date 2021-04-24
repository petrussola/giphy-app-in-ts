import React from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";

import SearchItem from "./SearchItem";

export default function SearchResults({ data }) {
  if (!data) {
    return <Spinner />;
  }
  return (
    <SimpleGrid columns={3} spacing="2rem">
      {data.map((item) => {
        return <SearchItem item={item} key={item.id} />;
      })}
    </SimpleGrid>
  );
}
