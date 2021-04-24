import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

import SearchResults from "./components/SearchResults";
import AlertMessage from "./components/AlertMessage";

function App() {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);
  return (
    <div className="App">
      <Box m="2rem">
        <AlertMessage errorMessage={errorMessage} />
        <SearchResults data={data} />
      </Box>
    </div>
  );
}

export default App;
