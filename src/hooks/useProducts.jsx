import { useState, useEffect } from "react";
import { getCategories, getProducts, getProductsByCategory, getProductById } from "../services";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]); 

    useEffect(() => {
        getProducts(limit).then(response => {setProductsData(response.data.products)}).catch(error => {console.log(error);});
      }, []);

      return {productsData}
    }
    export const useGetProductById = (collectionName = "products", id) => {
      const [productData, setProductData] = useState([]); 
  
      useEffect(() => {
          getProductById(id).then(response => {setProductData(response.data)}).catch(error => {console.log(error);});
        }, [id]);
  
        return {productData}
      }

      export const useGetCategories = () => {
        const [categories, setCategories] = useState([]); 
    
        useEffect(() => {
            getCategories().then(response => {setCategories(response.data)}).catch(error => {console.log(error);});
          }, []);
    
          return {categories}
        }

        export const useGetProductsByCategory = (id) => {
          const [productsData, setProductsData] = useState([]); 
        
          useEffect(() => {
            getProductsByCategory(id)
              .then(response => {
              console.log(response.data);
              setProductsData(response.data);
              })
              .catch(error => console.log(error));
          }, [id]);
        
          return { productsData };
        }