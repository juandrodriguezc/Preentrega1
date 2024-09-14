import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { id } = useParams();
<<<<<<< HEAD
  const slug = id; // Verifica que `id` sea uno de los slugs válidos

  const { productsData } = useGetProductsByCategory(slug);
  console.log('Products Data in Category component:', productsData);

  return <ItemListContainer productsData={productsData} />;
};
=======

  const { productsData } = useGetProductsByCategory(id);
  return <ItemListContainer productsData={productsData.products} />;
};
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
