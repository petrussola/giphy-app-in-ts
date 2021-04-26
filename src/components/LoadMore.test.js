import { cleanup, render, screen } from "@testing-library/react";
import LoadMore from "./LoadMore";

beforeEach(() => {
  render(<LoadMore appMode="trending" />);
});

afterEach(cleanup);

test("displays LoadMore component", () => {
  const buttonText = screen.getByText(/load more/i);
  expect(buttonText).toBeInTheDocument();
});
