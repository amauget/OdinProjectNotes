import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

/* describe("App component", () => {
  it('renders correct heading', () =>{
    render(<App />)
    expect(screen.getByRole('heading').textContent).toMatch(/our first test/i)
  })
}) */

  describe('App Component', () => {
    it('renders magnificent monkeys', () =>{
          // since screen does not have the container property, we'll destructure render to obtain a container for this test
      const { container } = render(<App />);      
      expect(container).toMatchSnapshot()
      
      /* .toMatchSnapshot() compares the HTML structures 
      
      exports[`App component > renders magnificent monkeys 1`] = `
      <div>
        <button
          type="button"
        >
          Click Me
        </button>
        <h1>
          Magnificent Monkeys
        </h1>
      </div>
      `;
      */
    })

    it('renders radical rhinos after button click', async () =>{
      const user = userEvent.setup()

      render(<App />)
      const button = screen.getByRole("button", {name: 'Click Me'})

      await user.click(button)

      expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i)
    })
  })


