import axios from "./config";

export function createCategory(categoryName) {
  const payload = {
    name: categoryName,
  };
  return axios.post(`/api/v1/category/create-category`, payload);
}

export function updateCategory({ CategoryData, CategoryId }) {
  return axios.put(`/api/v1/category/update/${CategoryId}`, CategoryData);
}
export function getCategories() {
  return axios.get(`/api/v1/category/findCategories`);
}
export function deleteCategory(CategoryId) {
  return axios.delete(`/api/v1/category/delete/${CategoryId}`);
}

export default {
  createCategory,
  updateCategory,
  getCategories,
  deleteCategory,
};
