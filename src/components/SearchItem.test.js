import { cleanup, render, screen } from "@testing-library/react";
import SearchItem from "./SearchItem";

beforeEach(() => {
  render(
    <SearchItem
      item={{
        id: 1,
        images: {
          downsized_medium: {
            url:
              "https://media4.giphy.com/media/MMtZPwdTIfqwpdFzfJ/giphy.gif?cid=cf49c2a6cma7fvnq7x98m82q8kl8u1qifcs9i1jy274nqc3t&rid=giphy.gif&ct=g",
          },
        },
      }}
    />
  );
});

afterEach(cleanup);

test("displays skeleton", () => {
  const skeletonImage = screen.getByRole("img");
  expect(skeletonImage).toHaveClass("chakra-image__placeholder");
});
