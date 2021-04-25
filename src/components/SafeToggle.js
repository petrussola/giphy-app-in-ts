import React from "react";
import { FormControl, Switch, FormLabel } from "@chakra-ui/react";

export default function SafeToggle({ setPage, setSafeSearch, safeSearch }) {
  const safeChangeHandler = () => {
    setPage({ trending: 0, search: 0 });
    setSafeSearch((safeSearch) => !safeSearch);
  };
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      pr="2rem"
      mb="1rem"
    >
      <FormLabel htmlFor="safe-search" mb="0">
        Family Safe Results?
      </FormLabel>
      <Switch
        id="safe-search"
        isChecked={safeSearch}
        onChange={safeChangeHandler}
      />
    </FormControl>
  );
}
