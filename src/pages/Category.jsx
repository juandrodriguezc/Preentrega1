import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { id } = useParams();
  const slug = id; // Verifica que `id` sea uno de los slugs válidos

  const { productsData } = useGetProductsByCategory(slug);
  console.log('Products Data in Category component:', productsData);

  return <ItemListContainer productsData={productsData} />;
};