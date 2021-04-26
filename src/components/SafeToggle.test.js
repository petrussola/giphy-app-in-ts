import { cleanup, render, screen } from "@testing-library/react";
import SafeToggle from "./SafeToggle";

beforeEach(() => {
  render(<SafeToggle safeSearch={true} />);
});

afterEach(cleanup);

test("displays text", () => {
  const text = screen.getByText(/Family Safe Results/i);
  expect(text).toBeInTheDocument();
});

test("toggle is displayed", () => {
  const switchButton = screen.getByTestId("family-safe-toggle");
  expect(switchButton).toBeInTheDocument();
});
