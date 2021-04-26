import { cleanup, render, screen } from "@testing-library/react";
import SearchTool from "./SearchTool";

beforeEach(() => {
  render(<SearchTool appMode="trending" searchTerm="" />);
});

afterEach(cleanup);

test("renders search button", () => {
  const button = screen.getByText(/search/i);
  expect(button).toBeInTheDocument();
});

test("renders input box", () => {
  const inputBox = screen.getByTestId("input-box");
  expect(inputBox).toBeInTheDocument();
});
