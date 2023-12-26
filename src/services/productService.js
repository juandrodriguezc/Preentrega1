import axios from "axios"

export async function getProducts(limit = 10) {
    return await axios.get('https://dummyjson.com/products/');
}