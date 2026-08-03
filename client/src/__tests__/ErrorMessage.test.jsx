import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "../components/ErrorMessage";

describe("ErrorMessage", () => {
  test("renders error text", () => {
    render(<ErrorMessage message="Something went wrong." />);

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  });
});
