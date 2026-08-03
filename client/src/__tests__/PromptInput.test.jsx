import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import PromptInput from "../components/PromptInput";

describe("PromptInput", () => {
  test("allows user to type", () => {
    render(<PromptInput onSend={() => {}} loading={false} />);

    const textarea = screen.getByPlaceholderText(/ask me anything/i);

    fireEvent.change(textarea, {
      target: {
        value: "Hello AI",
      },
    });

    expect(textarea.value).toBe("Hello AI");
  });
});
