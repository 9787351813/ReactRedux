import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './CartSlice';
import './App.css'; // Importing the CSS file

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div className="container">
      <h1 className='shop'>Shopping Cart</h1>
      <div className="cart">
        {cart.products.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Description: {product.description}</p>
              <p>Brand: {product.brand}</p>
              <p>Rating: {product.rating}</p>
              <div className="price-and-quantity">
                <p>Price: ${product.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                </div>
              </div>
              <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <h2>Total Quantity: {cart.totalQuantity}</h2>
          <h2>Total Amount: ${cart.totalAmount.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
