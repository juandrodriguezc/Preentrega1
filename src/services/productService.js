import axios from "axios";

/**
 * @name getProducts
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
