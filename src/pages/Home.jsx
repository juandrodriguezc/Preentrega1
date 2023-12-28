import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts";

export const Home = () => {

  const {productsData} = useGetProducts(3);

  return <ItemListContainer productsData={productsData}/>
  }

