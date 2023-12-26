import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { MainRouter } from "../router/MainRouter"

export const Home = () => {
  return (
    <div style={{ width: '100vh', height: '100vh'}}>
      <MainRouter/>
      <ItemListContainer productsData={productsData}/>
    </div>
  );
}
