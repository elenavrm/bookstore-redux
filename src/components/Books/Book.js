import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Book = ({book}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
            <img src={book.img} alt='book cover'/>
            <h2>{book.name}</h2>
            <h3 className="price">$ {book.price.toFixed(2)}</h3>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {dispatch(addItemToCart({book, quantity}))}}>ADD TO CART</button>
            
        </div>
    )
}

export default Book;