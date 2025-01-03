import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


/* TESTING COMPONENT RENDERING*/
describe("App component", () => {
    it("renders correct heading", () => {
      render(<App />);
      expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
    });
  });



/* SIMULATING USER EVENTS */
describe("App component", () => {
    it("renders magnificent monkeys", () => {
      // since screen does not have the container property, we'll destructure render to obtain a container for this test
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
  
    it("renders radical rhinos after button click", async () => {
      const user = userEvent.setup();
  
      render(<App />);
      const button = screen.getByRole("button", { name: "Click Me" });
  
      await user.click(button);
  
      expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    });
  });

  /* Mock elements */
  import CustomButton from "../assets/CustomButton"; //Assuming a mock element was defined and exported...

describe("React Component Testing Template", () => {


  // Test: Props Handling
  // Purpose: Verifies that the component renders correctly based on specific props.
  it("renders with correct props", () => {
    render(<YourComponent propName="Test Value" />);
    const propElement = screen.getByText(/Test Value/i);
    expect(propElement).toBeInTheDocument();
  });

  // Test: Event Handling (Button Click)
  // Purpose: Ensures that clicking a button triggers the expected behavior.
  it("handles button click event", () => {
    render(<YourComponent />);
    const button = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(button);
    const updatedElement = screen.getByText(/Updated Text/i);
    expect(updatedElement).toBeInTheDocument();
  });

  // Test: Input Handling (Typing in a Text Input)
  // Purpose: Verifies that typing in an input field updates the field's value.
  it("updates input field on change", () => {
    render(<YourComponent />);
    const input = screen.getByPlaceholderText("Enter text"); // Placeholder in input field
    fireEvent.change(input, { target: { value: "New Value" } });
    expect(input.value).toBe("New Value");
  });

  // Test: Conditional Rendering
  // Purpose: Checks that elements appear or disappear based on conditional logic.
  it("conditionally renders elements", () => {
    render(<YourComponent condition={true} />);
    const conditionalElement = screen.getByText("Conditional Text"); // Text displayed when condition is true
    expect(conditionalElement).toBeInTheDocument();
  });

  // Test: State Management (initial state check)
  // Purpose: Confirms that the component initializes with the correct state values.
  it("renders with initial state", () => {
    render(<YourComponent />);
    const stateElement = screen.getByText("Initial State");
    expect(stateElement).toBeInTheDocument();
  });

});

  
