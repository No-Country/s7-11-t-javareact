import axios from "./config";

export function createProduct({ productData, categoryId }) {
  return axios.post(
    `/api/v1/product/create-product/${categoryId}`,
    productData
  );
}

export function updateProduct({ productData, productId }) {
  return axios.put(`/api/v1/product/update/${productId}`, productData);
}
export function getProducts() {
  return axios.get(`/api/v1/product/getProducts`);
}
export function deleteProduct(productId) {
  return axios.delete(`/api/v1/product/delete/${productId}`);
}

export default { createProduct, updateProduct, getProducts, deleteProduct };
