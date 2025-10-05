import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../App.jsx";

test("renders product list", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
});

test("adds item to cart", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const addButton = screen.getAllByText(/Add to Cart/i)[0];
  fireEvent.click(addButton);
  expect(screen.getByText(/Total:/i)).toHaveTextContent("Total: $");
});
