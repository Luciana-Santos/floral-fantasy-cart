import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

const CartItem = () => {
  return (
    <li>
      <div>
        <p>Flower 4</p> <span>$24.99</span>
      </div>
      <div>
        <IoRemoveCircle /> 2 <IoAddCircle />
      </div>
    </li>
  );
};
export default CartItem;
