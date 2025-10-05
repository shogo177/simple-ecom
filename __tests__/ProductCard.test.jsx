import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store/store.js";
import ProductCard from "../src/components/ProductCard.jsx";

describe("ProductCard Component", () => {
  test("renders product name and price", () => {
    render(
      <Provider store={store}>
        <ProductCard product={{ id: 1, name: "Shoes", price: 99 }} />
      </Provider>
    );

    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
  });

  test("adds product to cart when 'Add to Cart' clicked", () => {
    render(
      <Provider store={store}>
        <ProductCard product={{ id: 2, name: "Hat", price: 25 }} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    const state = store.getState().cart;
    expect(state).toEqual([{ id: 2, name: "Hat", price: 25 }]);
  });
});
