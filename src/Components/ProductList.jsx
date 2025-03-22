import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';
import './ProductList.css';


const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);
  const cartItems = useSelector(state => state.cart.cartItems);

  // added this to fix addItemToCart button not working after removing that item from cart once.
  useEffect(() => {
    const newDisabledProducts = cartItems.map((item) => item.id);
    setDisabledProducts(newDisabledProducts);
  }, [cartItems]);

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = (product) => {
    if (!disabledProducts.includes(product.id)) {
      dispatch(addItemToCart(product));
      setDisabledProducts([...disabledProducts, product.id]);
    }
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className='product-list-item'>
            <span>{product.name} - ${product.price}</span>
            <button
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} //disable button if product is in disabledProducts arr 
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProductList;
