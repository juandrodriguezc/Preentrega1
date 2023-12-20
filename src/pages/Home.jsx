import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { MainRouter } from "../router/MainRouter"

export const Home = () => {
  return (
    <div>
    <ItemListContainer greeting='Esta es nuestra lista de productos'/>
    </div>
  )
}
