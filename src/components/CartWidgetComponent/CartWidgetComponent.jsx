import cart from './assets/cart.svg'
import {CartContext} from '../../Context/CartContext' 
import { useContext } from 'react';

const CartWidgetComponent = () => {
  
    const { count } = useContext(CartContext);
    console.log(count)

    const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <img src={cart} alt='carrito-compra'/>
            <span>{totalQuantity}</span>
        </div>
    );
}



export default CartWidgetComponent
