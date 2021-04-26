import React from "react";
import { Button } from "@chakra-ui/react";

export default function LoadMore({ setPage, appMode }) {
  const loadMoreHandler = () => {
    setPage((page) => ({ ...page, [appMode]: page[appMode] + 12 }));
  };
  return (
    <Button m="2rem" bg="gray.500" onClick={loadMoreHandler}>
      Load more..
    </Button>
  );
}
