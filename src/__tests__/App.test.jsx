import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../App";

function renderWithProvider(ui) {
  return render(<Provider store={store}>{ui}</Provider>);
}

test("renders the app title", () => {
  renderWithProvider(<App />);
  expect(screen.getByText(/Simple E-Commerce/i)).toBeInTheDocument();
});

test("adds item to cart when 'Add to Cart' button is clicked", () => {
  renderWithProvider(<App />);
  const addButton = screen.getAllByText(/Add to Cart/i)[0];
  fireEvent.click(addButton);
  expect(screen.getByText(/Items: 1/)).toBeInTheDocument();
});
