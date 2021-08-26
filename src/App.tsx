import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

import SearchResults from "./components/SearchResults";
import AlertMessage from "./components/AlertMessage";
import LoadMore from "./components/LoadMore";
import AppMode from "./components/AppMode";
import SearchTool from "./components/SearchTool";
import SafeToggle from "./components/SafeToggle";

import { GIFObject } from "giphy-api";

import { Page, AppModeType } from "./types";

function App() {
  const [data, setData] = useState<GIFObject[]>([]);
  const [page, setPage] = useState<Page>({ trending: 0, search: 0 });
  const [appMode, setAppMode] = useState<AppModeType>("trending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [safeSearch, setSafeSearch] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const offSet = page[appMode];
    const searchQueryParam = appMode === "search" ? searchTerm : "";
    const ratingQueryParam = safeSearch ? "g" : "";
    setErrorMessage(null);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/${appMode}?api_key=${apiKey}&limit=12&offset=${offSet}&q=${searchQueryParam}&rating=${ratingQueryParam}`
      )
      .then((res) => {
        if (page[appMode] > 0) {
          setData((data) => [...data, ...res.data.data]);
        } else {
          setData(res.data.data);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [appMode, searchTerm, page, apiKey, safeSearch]);

  return (
    <div className="App">
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        <SearchTool
          setSearchTerm={setSearchTerm}
          setAppMode={setAppMode}
          appMode={appMode}
          setPage={setPage}
        />
        <AppMode
          appMode={appMode}
          searchTerm={searchTerm}
          setAppMode={setAppMode}
          setPage={setPage}
        />
        <SafeToggle
          safeSearch={safeSearch}
          setSafeSearch={setSafeSearch}
          setPage={setPage}
        />
        <AlertMessage errorMessage={errorMessage} />
        <SearchResults data={data} />
        <LoadMore setPage={setPage} appMode={appMode} />
      </Box>
    </div>
  );
}

export default App;
