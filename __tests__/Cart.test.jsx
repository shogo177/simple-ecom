import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../App.jsx";

test("cart updates when product is added", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const addButton = screen.getAllByText("Add to Cart")[0];
  fireEvent.click(addButton);
  expect(screen.getByText("Total: $")).toBeInTheDocument();
});
