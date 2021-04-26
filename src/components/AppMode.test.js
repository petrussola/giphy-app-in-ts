import { cleanup, render, screen } from "@testing-library/react";
import AppMode from "./AppMode";

afterEach(cleanup);

test("displays app mode component", () => {
  render(<AppMode appMode="trending" searchTerm="" />);
  const linkElement = screen.getByTestId("app-mode");
  expect(linkElement).toBeInTheDocument();
});

test("shows button return trending gifs", () => {
  render(<AppMode appMode="search" searchTerm="cat" />);
  const button = screen.getByText(`Return to Trending Gifs`);
  expect(button).toBeInTheDocument();
});

test("shows search results", () => {
  render(<AppMode appMode="search" searchTerm="cat" />);
  const text = screen.getByText(/search results for "cat"/i);
  expect(text).toBeInTheDocument();
});
