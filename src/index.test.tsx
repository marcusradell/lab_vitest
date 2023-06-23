import { render, screen } from "@testing-library/react";
import App from "./App";

test("it works!", () => {
  expect(1).toEqual(0);
});

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("Vite + React");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
