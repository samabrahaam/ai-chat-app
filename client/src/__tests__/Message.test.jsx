import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Message from "../components/Message";

describe("Message Component", () => {
  test("renders AI message", () => {
    render(<Message role="ai" text="Hello World" time="10:00 AM" />);

    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
