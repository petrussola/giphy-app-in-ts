import { cleanup, render, screen } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

beforeEach(() => {
  render(<AlertMessage errorMessage="this is an error" />);
});

afterEach(cleanup);

test("displays error message", () => {
  const error = screen.getByText(/this is an error/i);
  expect(error).toBeInTheDocument();
});
