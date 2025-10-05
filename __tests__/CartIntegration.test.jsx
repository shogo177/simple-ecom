import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store/store.js";
import ProductCard from "../src/components/ProductCard.jsx";
import Cart from "../src/pages/Cart.jsx";

test("adds product to cart and shows in cart", () => {
  render(
    <Provider store={store}>
      <ProductCard product={{ id: 1, name: "Shoes", price: 99 }} />
      <Cart />
    </Provider>
  );

  fireEvent.click(screen.getByText("Add to Cart"));
  expect(screen.getByText("Shoes - $99")).toBeInTheDocument();
});
