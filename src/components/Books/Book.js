import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import Cart from '../Cart/Cart'; 

const Book = ({ book }) => {
  const [isCartOpen, setIsCartOpen] = useState(false) ;
  const dispatch = useDispatch();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ book, quantity: 1 })); 
    toggleCart();
  };

  return (
    <div>
      <img src={book.img} alt="book cover" />
      <h2>{book.name}</h2>
      <h3 className="price">$ {book.price.toFixed(2)}</h3>
      <button className='add-btn' onClick={handleAddToCart}>
        ADD TO CART
      </button>

      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default Book;
