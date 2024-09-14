import cart from './assets/cart.svg'
import {CartContext} from '../../Context/CartContext' 
import { useContext } from 'react';

const CartWidgetComponent = () => {
  
    const { count } = useContext(CartContext);
    console.log(count)
<<<<<<< HEAD
    const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <img src={cart} alt='carrito-compra'/>
            <span>{totalQuantity}</span>
        </div>
    );
}


=======
  return (
    <div>
        <img src={cart} alt='carrito-compra'/>
        0
    </div>
  )
}

>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
export default CartWidgetComponent
