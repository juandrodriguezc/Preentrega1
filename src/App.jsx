import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./router/MainRouter";
import { CartProvider } from "./Context/CartContext";

export const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CartProvider>
        <MainRouter />
        </CartProvider>
    </div>
  );
};
