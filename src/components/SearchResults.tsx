import React from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { GIFObject } from "giphy-api";

import SearchItem from "./SearchItem";

interface Props {
  data: GIFObject[]
}

export default function SearchResults({ data }: Props) {
  if (!data) {
    return <Spinner />;
  }
  return (
    <SimpleGrid
      columns={[1, null, 2, null, 3]}
      spacing={["1rem", null, "2rem", "2rem", null]}
    >
      {data.map((item) => {
        return <SearchItem item={item} key={item.id} />;
      })}
    </SimpleGrid>
  );
}
