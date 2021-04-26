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
      justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "flex-end",
      }}
      pr="2rem"
      my={{ base: "2rem", sm: "2rem", md: "2rem", lg: "1rem" }}
    >
      <FormLabel htmlFor="safe-search" mb="0">
        Family Safe Results?
      </FormLabel>
      <Switch
        id="safe-search"
        isChecked={safeSearch}
        onChange={safeChangeHandler}
        data-testid="family-safe-toggle"
      />
    </FormControl>
  );
}
