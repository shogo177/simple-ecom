// src/App.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./features/cartSlice.js";
import { products } from "./data/products.js";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      {/* Logo and Intro */}
      <header style={styles.header}>
        <img src="/logo.png" alt="Simple Ecom Logo" style={styles.logo} />
        <h1 style={styles.title}>Welcome to Simple E-Commerce!</h1>
        <p style={styles.intro}>
          Discover amazing products and manage your cart easily with our app.
        </p>
      </header>

      {/* Products */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Products</h2>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            {product.name} - ${product.price}
            <button
              style={styles.addButton}
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                {item.name} - ${item.price}
                <button
                  style={styles.removeButton}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <h3>Total: ${total}</h3>
            <button style={styles.clearButton} onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

// Styles for theme and layout
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  logo: {
    width: "120px",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  intro: {
    fontSize: "1.1rem",
    color: "#555",
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #ddd",
    paddingBottom: "0.5rem",
  },
  product: {
    marginBottom: "1rem",
  },
  addButton: {
    marginLeft: "1rem",
    padding: "0.3rem 0.6rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  cartItem: {
    marginBottom: "0.5rem",
  },
  removeButton: {
    marginLeft: "1rem",
    padding: "0.3rem 0.6rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
  },
  clearButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ffc107",
    color: "#000",
    cursor: "pointer",
  },
};

export default App;
