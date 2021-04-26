import { act, cleanup, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  act(() => {
    render(<App />);
  });
});

afterEach(cleanup);

test("renders trending label", () => {
  const trending = screen.getByText(/#TrendingGifs/i);
  expect(trending).toBeInTheDocument();
});

test("renders Search Button label", () => {
  const searchButton = screen.getByText(/search/i);
  expect(searchButton).toBeInTheDocument();
});

test("renders Family safe text", () => {
  const FamilySafeText = screen.getByText(/Family Safe Results/i);
  expect(FamilySafeText).toBeInTheDocument();
});

test("renders load more button", () => {
  const loadMoreButton = screen.getByText(/load more/i);
  expect(loadMoreButton).toBeInTheDocument();
});
