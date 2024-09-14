import { useState, useEffect } from "react";
import {getProductsByCategory} from "../services";
import {collection, getDoc, doc, getDocs,  getFirestore, query, where} from "firebase/firestore";

/**
 * @description
 * @returns {Array}
 */

export const useGetProducts = (collectionName = "products") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName); //Podemos usarlo para cualquier colección

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { productsData };
};

export const useGetProductById = (collectionName = "products", id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, collectionName, id)

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() })
    })

  }, [id]);

  return { productData };
};

export const useGetCategories = (collectionName = 'categories') => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const categoriesCollection = collection(db, collectionName);

      try {
        const snapshot = await getDocs(categoriesCollection);
        const categoriesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoriesArray.length > 0) {
          setCategories(categoriesArray); // Si hay categorías, las guardamos
        } else {
          console.warn("No categories found in the collection. Defaulting to an empty array.");
          setCategories([]);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err); // Guardamos el error en el estado
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchCategories();
  }, [collectionName]); // Si collectionName cambia, volverá a ejecutar el efecto

  return { categories, loading, error }; // Devolvemos categorías, estado de carga y error
};

export const useGetProductsByCategory = (categoryId) => {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      
      // Crear una consulta para filtrar productos por categoría
      const q = query(productsCollection, where('category', '==', categoryId));

      try {
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
          console.log(`No products found for category ${categoryId}.`);
          setProductsData([]); // Establece un array vacío si no hay productos
        } else {
          const productsArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          console.log(`Products found for category ${categoryId}:`, productsArray);
          setProductsData(productsArray);
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching products by category:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return { productsData, error, loading };
};