import cart from './assets/cart.svg'
import {CartContext} from '../../Context/CartContext' 
import { useContext } from 'react';

const CartWidgetComponent = () => {
  
    const { count } = useContext(CartContext);
    console.log(count)
  return (
    <div>
        <img src={cart} alt='carrito-compra'/>
        0
    </div>
  )
}

export default CartWidgetComponent
