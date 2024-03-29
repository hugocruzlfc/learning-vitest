import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "../components";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <div>World</div>
      </Accordion>
    );
  });

  test("renders title", () => {
    expect(screen.getByRole("heading", { name: /Hello/i })).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/World/i)).toBeNull();
  });

  test("should show the content after clicking the button", () => {
    fireEvent.click(screen.getByRole("button", { name: /open/i }));
    expect(screen.getByText(/World/i)).toBeDefined();
  });

  test("should hide the content when clicked again", () => {
    const button = screen.getByRole("button", { name: /open/i });
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByText(/world/i)).toBeNull();
  });
});
