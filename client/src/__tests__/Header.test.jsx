import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renders app title", () => {
    render(<Header onClearChat={() => {}} />);

    expect(screen.getByText("AI Chat App")).toBeInTheDocument();
  });

  test("renders New Chat button", () => {
    render(<Header onClearChat={() => {}} />);

    expect(
      screen.getByRole("button", {
        name: /new chat/i,
      }),
    ).toBeInTheDocument();
  });
});
