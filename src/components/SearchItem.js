import React from "react";
import { Image } from "@chakra-ui/react";

export default function SearchItem({ item }) {
  return (
    <Image
      height="384px"
      width="384px"
      src={item.images.downsized_medium.url}
      alt={item.title}
      borderRadius="5px"
      boxShadow="lg"
    />
  );
}
