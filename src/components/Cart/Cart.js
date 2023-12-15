import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import snitch from './snitch.png'


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <img className="cartIcon" src={snitch} alt="golden snitch"/>
            <h4>TOTAL: ${totalPrice.toFixed(2)}</h4>
            {cartItems.map(cartItem =>  <CartItem cartItem={cartItem}/>)}
        </div>
    )
}

export default Cart;