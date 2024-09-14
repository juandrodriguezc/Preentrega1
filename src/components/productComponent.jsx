import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ProductComponent = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(1); // Agrega 1 artículo al carrito, ajusta según sea necesario
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;