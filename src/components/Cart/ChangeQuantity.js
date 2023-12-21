const ChangeQuantity = ({ quantity, setQuantity }) => {
    const addQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const removeQuantity = () => {
      if (quantity <= 1) return;
      setQuantity(quantity - 1);
    };
  
    return (
      <div>
        <button className='quantity' onClick={addQuantity}> + </button>
        <span> {quantity} </span>
        <button className='quantity' onClick={removeQuantity}> - </button>
      </div>
    );
  };
  
  export default ChangeQuantity;
  