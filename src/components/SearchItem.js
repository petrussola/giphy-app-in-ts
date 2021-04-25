import React, { useState } from "react";
import { Image, Skeleton } from "@chakra-ui/react";

export default function SearchItem({ item }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadImage = () => {
    setIsLoaded(true);
  };

  return (
    <Skeleton isLoaded={isLoaded}>
      <Image
        height="384px"
        width="384px"
        src={item.images.downsized_medium.url}
        alt={item.title}
        borderRadius="5px"
        boxShadow="lg"
        onLoad={handleLoadImage}
      />
    </Skeleton>
  );
}
