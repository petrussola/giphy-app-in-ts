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
  const [page, setPage] = useState(0);
  const [appMode, setAddMode] = useState("Trending");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9&offset=0`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    if (page > 0) {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9&offset=${page}`
        )
        .then((res) => {
          setData([...data, ...res.data.data]);
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
        });
    }
  }, [page, data]);

  const loadMoreHandler = () => {
    setPage((page) => page + 9);
  };

  return (
    <div className="App">
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        <SearchTool />
        <AppMode appMode={appMode} />
        <AlertMessage errorMessage={errorMessage} />
        <SearchResults data={data} />
        <LoadMore loadMoreHandler={loadMoreHandler} />
      </Box>
    </div>
  );
}

export default App;
