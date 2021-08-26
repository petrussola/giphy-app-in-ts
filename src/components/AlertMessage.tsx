import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface Props {
  errorMessage: string | null;
}

export default function AlertMessage({ errorMessage }: Props) {
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
