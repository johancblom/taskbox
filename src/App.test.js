import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Taskbox", () => {
  render(<App />);
  const linkElement = screen.getByText(/taskbox/i);
  expect(linkElement).toBeInTheDocument();
});
