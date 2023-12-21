import { useSelector} from 'react-redux';
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import snitch from './snitch.png';
import ChangeQuantity from './ChangeQuantity';
import './Modal.css'


const Cart = ({ isOpen, toggleCart }) => {

  

  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  if (!isOpen) return null;


  return (
    <div>
      <div className="overlay" onClick={toggleCart} />
      <div className="cart-modal">
        <img className="cartIcon" src={snitch} alt="golden snitch" />
        <hr className='divider' />
        <h4>YOUR TOTAL: ${totalPrice.toFixed(2)}</h4>
        <hr className='divider' />
        
        {cartItems.map((cartItem) => (
          
          <div key={cartItem.id}>
            <CartItem key={cartItem.id} cartItem={cartItem} />
            <div>
            <ChangeQuantity quantity={cartItem.quantity}/>
            </div>
          </div>
          
        ))}
        <button onClick={toggleCart}>CONTINUE SHOPPING</button>
      </div>
    </div>
  );
};

export default Cart;