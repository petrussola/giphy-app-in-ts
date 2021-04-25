import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

import SearchResults from "./components/SearchResults";
import AlertMessage from "./components/AlertMessage";
import LoadMore from "./components/LoadMore";
import AppMode from "./components/AppMode";
import SearchTool from "./components/SearchTool";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({ trending: 0, search: 0 });
  const [appMode, setAppMode] = useState("trending");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/${appMode}?api_key=${
          process.env.REACT_APP_API_KEY
        }&limit=9&offset=${page[appMode]}${
          appMode === "search" ? `&q=${searchTerm}` : null
        }`
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
  }, [appMode, searchTerm, page]);

  return (
    <div className="App">
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        <SearchTool
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setAppMode={setAppMode}
          appMode={appMode}
          setPage={setPage}
        />
        <AppMode appMode={appMode} />
        <AlertMessage errorMessage={errorMessage} />
        <SearchResults data={data} />
        <LoadMore setPage={setPage} appMode={appMode} />
      </Box>
    </div>
  );
}

export default App;
