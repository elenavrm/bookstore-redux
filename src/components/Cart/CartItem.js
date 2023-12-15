import dataBooks from "../../data/dataBooks";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import deleteIcon from './delete.png';

const CartItem = ({cartItem}) => {

const books = dataBooks.find(item => item.id === cartItem.bookId);
const dispatch = useDispatch();
    return (
        <div>
            <p>{books.name}</p>
            <p>{cartItem.quantity} book(s)</p>
            <p>Price: ${books.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src={deleteIcon} alt="delete icon"/> 
            </span>
        </div>
    )
}

export default CartItem;