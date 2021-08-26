import React from "react";
import { Button } from "@chakra-ui/react";

import { Page, AppModeType } from "../types";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  appMode: AppModeType;
}

export default function LoadMore({ setPage, appMode }: Props) {
  const loadMoreHandler = () => {
    setPage((page) => ({ ...page, [appMode]: page[appMode] + 12 }));
  };
  return (
    <Button m="2rem" px="3rem" onClick={loadMoreHandler}>
      Load more..
    </Button>
  );
}
