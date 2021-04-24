import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function AlertMessage({ errorMessage }) {
  if (!errorMessage) {
    return null;
  }
  return (
    <Alert status="error">
      {" "}
      <AlertIcon />
      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
      <AlertDescription>Please contact app owner</AlertDescription>
    </Alert>
  );
}
