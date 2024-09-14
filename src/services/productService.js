import axios from "axios";

/**
 * @name getProducts
<<<<<<< HEAD
 * @description Retrieves a list of products with an optional limit.
 * @param {number} [limit=6] - Number of products to retrieve.
 * @returns {Promise} - A promise that resolves to the products data.
 */
export async function getProducts(limit = 6) {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

/**
 * @name getProductById
 * @description Retrieves a product by its ID.
 * @param {number} id - The ID of the product to retrieve.
 * @returns {Promise} - A promise that resolves to the product data.
 */
export async function getProductById(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}

/**
 * @name getCategories
 * @description Retrieves a list of product categories.
 * @returns {Promise} - A promise that resolves to the categories data.
 */
export async function getCategories() {
  try {
    const response = await axios.get("https://dummyjson.com/products/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

/**
 * @name getProductsByCategory
 * @description Retrieves products by their category slug.
 * @param {string} slug - The slug of the category to retrieve products from.
 * @returns {Promise} - A promise that resolves to the products data for the specified category.
 */
export async function getProductsByCategory(slug) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${slug}`);
    console.log("Response data:", response.data); // Imprime la respuesta completa
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${slug}:`, error);
    throw error;
  }

}

=======
 * @description
 * @param {number}
 * @default limit
 * @returns {promise}
 */

export async function getProducts(limit = 6) {
  return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getCategories() {
  return await axios.get("https://dummyjson.com/products/categories");
}

export async function getProductsByCategory(id = "smartphone") {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
